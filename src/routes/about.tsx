import { createFileRoute } from '@tanstack/react-router'
import PageTitle from '../components/PageTitle'
export const Route = createFileRoute('/about')({
  component: AboutComponent,
})
// Github presence
// history pics
// maps

function AboutComponent() {
  return <div><PageTitle title='About'/></div>
}
