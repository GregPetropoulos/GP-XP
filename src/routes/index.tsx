import { createFileRoute } from '@tanstack/react-router'

// import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: HomeIndexComponent,
})

function HomeIndexComponent() {
  return (
    <div className="text-center">
       <h1>Home Page</h1>
    </div>
  )
}
