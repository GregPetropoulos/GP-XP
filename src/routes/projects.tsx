import { createFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/PageTitle'
export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return <div><PageTitle title='Projects'/></div>
}
