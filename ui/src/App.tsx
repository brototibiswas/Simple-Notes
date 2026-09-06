import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import NotePage from "./pages/NotePage/NotePage";
import { NotesProvider } from "./context/NotesContext";

export default function App() {
  // wrapping the application in notesprovider so all the children element have access to shared values from the NotesContext
  return (
    <NotesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes/:noteId" element={<NotePage />} />
        </Routes>
      </BrowserRouter>
    </NotesProvider>
  )
}
