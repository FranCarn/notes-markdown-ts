import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./pages/NewNote/NewNote";
import { NoteList } from "./pages/home/NoteList";
import { NoteLayout } from "./components/NoteLayout";
import { Note } from "./pages/Note/Note";
import { EditNote } from "./pages/EditNote/EditNote";
import { useApp } from "./hooks/useApp";

function App() {
  const {
    tags,
    notesWithTags,
    onUpdateTag,
    onDeleteTag,
    onDeleteNote,
    onCreateNote,
    onAddTag,
    onUpdateNote,
  } = useApp();

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              availableTags={tags}
              notes={notesWithTags}
              onUpdateTag={onUpdateTag}
              onDeleteTag={onDeleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={onAddTag}
              availableTags={tags}
            />
          }
        />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={onAddTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
