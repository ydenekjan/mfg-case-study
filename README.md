## Starting locally

```bash
npm run dev
```

## Notes

### Deployment

- kindly refer to the link located in the top right of this repository's main page

### Structure

src/  
|-- app/  
|-- assets/  
|-- components/  
|-- |-- core/    project-specific React components  
|-- '-- ui/      mostly shadcn-ui components  
|-- hooks/ - custom hooks - in this case only useQuery hooks  
|-- lib/ - utility functions  
'-- types/ - reusable types throughout the project

### State

- there wasn't really any necessity for state management or even useeContext as Tanstack Query handles caching and allows cross-file refetching using queryClients

