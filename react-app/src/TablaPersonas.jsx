import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TablaPersonas() {

  const personas = [
    { nombre: "Juan", apellido: "Perez", edad: 20 },
    { nombre: "Maria", apellido: "Lopez", edad: 17 },
    { nombre: "Carlos", apellido: "Gomez", edad: 25 },
    { nombre: "Ana", apellido: "Martinez", edad: 16 },
    { nombre: "Luis", apellido: "Hernandez", edad: 30 },
    { nombre: "Sofia", apellido: "Ramirez", edad: 22 }
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