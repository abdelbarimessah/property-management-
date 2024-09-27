# Property Management Application

## Overview

This project is a simple property management application designed to handle properties of various sizes. The application allows property managers to add new properties, manage tenants, and monitor rent payments.

## Core Features

- **Add Property**: Create properties with details such as name, address, type (e.g., apartment or house), number of units, and rental cost.
- **Tenant Management**: Add, modify, and remove tenants associated with properties. Tenants include names, contact details, and the section they occupy.
- **Rental Payments Monitoring**: Track payments made by tenants, including payment dates and status (settled or not).
- **Data Persistence**: Utilize a PostgreSQL database with Prisma for storing property, tenant, and payment data.
- **Authentication**: Secure the API with JWT (JSON Web Tokens) to ensure only authenticated users can perform CRUD operations.

## Optional Features

- **Filtering and Sorting**: Implement functionality to filter and sort properties based on location, rental price, and type.
- **Automated Email Notifications**: Mock the process of sending emails for due payments.
- **Unit Tests**: Implement tests for critical components of the application.

## Technologies Used

- **Backend**: NestJS, TypeScript, Prisma, PostgreSQL
- **Frontend**: Next.js, TypeScript, Axios
- **Containerization**: Docker, Docker Compose
- **Styling**: Shadcn
- **Authentication**: Passport.js

## Prerequisites

Before running the project, ensure you have the following installed:

- Docker
- Docker Compose

## Running the Project

Follow these steps to set up and run the application:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/abdelbarimessah/property-management-
   cd property-management-
   ```

2. **Start the Backend**

   In the root of the project, run:

   ```bash
   make -f makefile.backend
   ```

3. **Start the Frontend**

   In a new terminal, run:

   ```bash
   make -f makefile.frontend
   ```

4. **Access the Application**

   - Once both parts are running, access the application through your web browser at `http://localhost:8000`.

## API Documentation

API documentation is available in the project. You can use Swagger or refer to the README file for detailed information about the endpoints and their usage guidelines.

## Contributing

If you'd like to contribute to the project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
