import { Note } from "./Note";
import { NoteCardProps } from "./NoteCardProps";
import { RawNote } from "./RawNote";
import { Tag } from "./Tag";

export type NoteListProps = {
  availableTags: Tag[];
  notes: NoteCardProps[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};
