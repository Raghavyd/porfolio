# Project Overview

## Overview

This is a full-stack web application built with React and Express.js that serves as a personal portfolio website for Aman Kumar, a B.Tech student at Netaji Subhas Engineering College. The application showcases projects, skills, and contact information through a modern, responsive interface. The tech stack includes React with TypeScript on the frontend, Express.js on the backend, PostgreSQL with Drizzle ORM for data persistence, and shadcn/ui components for the user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in strict mode
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod schema validation

### Backend Architecture
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Custom Vite integration for SSR-like development experience
- **API Design**: RESTful API with /api prefix routing convention

### Data Storage
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL adapter
- **Fallback Storage**: In-memory storage implementation for development/testing
- **Session Store**: PostgreSQL-backed session persistence

### Development Workflow
- **Monorepo Structure**: Shared TypeScript types and schemas between frontend/backend
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite HMR integration with Express server
- **Type Safety**: End-to-end TypeScript with strict compiler options
- **Build Process**: Separate builds for client (Vite) and server (esbuild)

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant handling for components

### Data and API Management
- **TanStack Query**: Server state management with caching and synchronization
- **Drizzle ORM**: Type-safe SQL query builder and ORM
- **Zod**: Schema validation for forms and API contracts
- **date-fns**: Date manipulation and formatting utilities

### Development and Build Tools
- **Vite**: Build tool with React plugin and custom error overlay
- **esbuild**: Fast JavaScript bundler for production server builds
- **tsx**: TypeScript execution for development server
- **PostCSS**: CSS processing with Tailwind CSS integration

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database platform
- **connect-pg-simple**: PostgreSQL session store for Express
- **PostgreSQL**: Primary database with UUID generation and full-text capabilities

### Animation and Interaction
- **Framer Motion**: Animation library for React components
- **Embla Carousel**: Lightweight carousel component
- **cmdk**: Command palette and search interface
- **Wouter**: Minimalist routing for React applications