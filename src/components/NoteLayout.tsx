import { Navigate, Outlet, useParams } from "react-router-dom";
import { NoteLayoutProps } from "./types";

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  if (!note) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};
