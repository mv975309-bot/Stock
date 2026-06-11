import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Productos from "./paginas/Productos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/productos" replace />} />
        <Route
          path="/productos"
          element={
            <MainLayout>
              <Productos />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/productos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
