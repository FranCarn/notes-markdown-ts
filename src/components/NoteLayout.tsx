import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../models";

type NoteLayoutProps = {
  notes: Note[];
};

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  if (!note) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};
