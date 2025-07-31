import { useEffect, useState } from "react";
import { getVolunteers, deleteVolunteer } from "../services/volunteer";
import { Button } from "./ui/button";

export function VolunteersAdmin() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getVolunteers(token)
        .then(setVolunteers)
        .finally(() => setLoading(false));
    }
  }, [token]);

  const handleDelete = async (id: string) => {
    if (token && window.confirm("Tem certeza que deseja remover este voluntário?")) {
      await deleteVolunteer(id, token);
      setVolunteers((prev) => prev.filter((v) => v._id !== id));
    }
  };

  if (loading) return <div>Carregando voluntários...</div>;

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4">Lista de Voluntários</h3>
      <ul className="divide-y">
        {volunteers.map((v) => (
          <li key={v._id} className="flex justify-between items-center py-2">
            <span>
              <b>{v.name} {v.surname}</b> - {v.email} - {v.phone} - {v.gender}
            </span>
            <Button variant="destructive" onClick={() => handleDelete(v._id)}>
              Remover
            </Button>
          </li>
        ))}
      </ul>
      {volunteers.length === 0 && <div className="text-gray-500 mt-4">Nenhum voluntário cadastrado.</div>}
    </div>
  );
}