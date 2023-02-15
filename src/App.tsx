import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { NewNote } from "./NewNote";
import { Tag } from "./types";
import { RawNote } from "./types";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={} />
          <Route path="edit" element={} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
