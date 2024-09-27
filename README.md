# Property Management Application

## Overview

This application is designed to facilitate property management for property managers, allowing them to handle properties of various sizes, manage tenants, and monitor rent payments.

## Core Features

- **Add Property**: 
  - Properties can be added with details such as name, address, type (e.g., apartment or house), number of units, and rental cost.

- **Tenant Management**: 
  - Add, modify, and remove tenants associated with properties. Tenant details include names, contact information, and the section they occupy.

- **Rental Payments Monitoring**: 
  - Record payments made by tenants, including payment date and status (settled or not).

- **Data Persistence**: 
  - Uses an SQLite database to store property, tenant, and payment records.

- **Authentication**: 
  - Secures the API using JSON Web Tokens (JWT), ensuring only authenticated users can perform CRUD operations.

## Optional Extra Functionality (Bonus Points)

- Filtering and sorting properties based on criteria like location, rental price, and type.
- Automated email notifications for due payments (mock implementation).
- Unit tests for critical parts of the application.

## API Documentation

API documentation is available through Swagger (or a README file) detailing the endpoints and usage guidelines.

## Prerequisites

Before running the project, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <[repository-link](https://github.com/abdelbarimessah/property-management-)>
   cd <property-management->
   ```

2. **Run Backend**:
   Make sure Docker is running. In the root of the project, execute:
   ```bash
   make -f makefile.backend
   ```

3. **Run Frontend**:
   In a new terminal, run:
   ```bash
   make -f makefile.frontend
   ```

## Running the Application

Once the commands above have been executed successfully, the application should be up and running. You can access the API and the frontend through the specified ports in the configuration.

## Contributing

Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, please reach out to [messahabdelbari1337@gmail.com]. 

---
