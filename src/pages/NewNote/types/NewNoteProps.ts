import { NoteData } from "../../../types/NoteData";
import { Tag } from "../../../types/Tag";

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
