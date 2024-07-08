import { Routes, Route } from "react-router-dom"

const NotFound: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        {children}
    </Routes>
  )
}

export default NotFound