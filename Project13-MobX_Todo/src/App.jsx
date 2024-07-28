
import { observer } from "mobx-react-lite";
import todostore from "./assets/store/TodoStore";
import { Box, Typography, Button, List, ListItem, ListItemText, Checkbox, TextField, Paper, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const App = observer(() => {
  const handleAddTodo = () => {
    todostore.addTodo();
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", minHeight: "100vh",minWidth: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ padding: 4, maxWidth: 600, width: "100%" }} elevation={3}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 3 }}>
          <TextField
            className = "AddTodoTest"
            label="New Todo"
            variant="outlined"
            fullWidth
            value={todostore.newTodoText}
            onChange={(e) => todostore.setNewTodoText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTodo}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>
        <List>
          {todostore.todos.map((todo) => (
            <ListItem key={todo.id} sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 1, backgroundColor: "#fff", borderRadius: 1 }}>
              <Checkbox
                className="CheckToggleTest"
                checked={todo.completed}
                onChange={() => todostore.toggleTodoCompleted(todo.id)}
              />
              <ListItemText
                primary={todo.text}
                primaryTypographyProps={{ style: { textDecoration: todo.completed ? "line-through" : "none" } }}
              />
              <IconButton color="secondary" onClick={() => todostore.removeTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default App;
