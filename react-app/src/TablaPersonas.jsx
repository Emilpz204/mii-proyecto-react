import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function TablaPersonas() {
  const personas = [
    { nombre: "Juan", apellido: "Perez", edad: 20 },
    { nombre: "Ana", apellido: "Lopez", edad: 16 },
    { nombre: "Carlos", apellido: "Ramirez", edad: 25 },
    { nombre: "Sofia", apellido: "Gomez", edad: 17 },
    { nombre: "Luis", apellido: "Martinez", edad: 30 },
    { nombre: "Elena", apellido: "Torres", edad: 22 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {personas.map((persona, index) => (
            <TableRow key={index}>
              <TableCell>{persona.nombre}</TableCell>
              <TableCell>{persona.apellido}</TableCell>
              <TableCell>{persona.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablaPersonas;