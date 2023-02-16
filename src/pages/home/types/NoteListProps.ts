import { Note } from "../../../types/Note";
import { NoteCardProps } from "./NoteCardProps";
import { RawNote } from "../../../types/RawNote";
import { Tag } from "../../../types/Tag";

export type NoteListProps = {
  availableTags: Tag[];
  notes?: NoteCardProps[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};
