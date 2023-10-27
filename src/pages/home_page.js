import FormAddTask from '../components/form_add_task';
import ListTasks from '../components/list_tasks';

export default function HomePage(props) {
  return (
    <>
      <div className="wrapper">
        <FormAddTask />
        <ListTasks />
      </div>
    </>
  );
}
