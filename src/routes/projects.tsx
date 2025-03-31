import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/projects')({
  component: ProjectsComponent
});

function ProjectsComponent() {
  return (
    <div className='w-full flex justify-center text-center'>
      <p className='my-10'> &#128640; Projects coming soon... &#128512;</p>
    </div>
  );
}
