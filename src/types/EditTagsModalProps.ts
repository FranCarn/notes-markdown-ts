import { ReactEventHandler, ReactInstance } from "react";
import { NoteListProps } from "./NoteListProps";
import { Tag } from "./Tag";

export type EditTagsModalProps = {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => void;
} & Partial<NoteListProps>;
