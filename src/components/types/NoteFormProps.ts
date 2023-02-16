import { NoteData } from "../../types/NoteData";
import { Tag } from "../../types/Tag";

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;
