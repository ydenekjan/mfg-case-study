## About

This project was a part of a hiring process. Despite that I'm very content with how it turned out.
Ended up creating my own Next.js API as no API was provided to me. This further honed my backend skills and forced me to learn something new at the same time.

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

