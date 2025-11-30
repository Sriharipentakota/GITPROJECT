# Project Structure Documentation

This document outlines the refactored project structure designed for better code organization, modularity, and maintainability.

## 📁 Folder Structure

```
src/
├── components/           # React components
│   ├── UI/              # Reusable UI components
│   │   ├── Button.jsx   # Reusable button component
│   │   ├── Dropdown.jsx # Reusable dropdown/select component
│   │   ├── Input.jsx    # Reusable input component
│   │   ├── InfoBox.jsx  # Reusable info/message box component
│   │   └── index.js     # UI components export file
│   ├── QRCodeGenerator/ # QR code generator feature components
│   │   ├── ModeSelector.jsx    # Mode selection component
│   │   ├── ContentInput.jsx    # Content input component
│   │   ├── QRCodeOutput.jsx    # QR code output component
│   │   └── index.jsx           # Main QR generator component
│   ├── ViewPage/        # View page components
│   │   └── index.jsx    # Refactored view page component
│   └── Navigation.jsx   # Navigation component
├── hooks/               # Custom React hooks
│   ├── useQRCodeGenerator.js  # QR code generation logic hook
│   ├── usePreventNavigation.js # Navigation prevention hook
│   └── index.js         # Hooks export file
├── services/            # External service integrations
│   ├── imageUploadService.js  # Cloud image upload service
│   └── index.js         # Services export file
├── utils/               # Utility functions
│   ├── validation.js    # Input validation utilities
│   ├── fileUtils.js     # File handling utilities
│   ├── urlUtils.js      # URL manipulation utilities
│   ├── qrUtils.js       # QR code generation utilities
│   └── index.js         # Utils export file
├── constants/           # Application constants
│   └── index.js         # Constants and configuration
├── App.jsx             # Main application component
├── App.css             # Application styles
└── index.js            # Application entry point
```

## 🎯 Design Principles

### 1. **Separation of Concerns**
- **Components**: Focus only on UI rendering and user interaction
- **Hooks**: Encapsulate business logic and state management
- **Services**: Handle external API calls and integrations
- **Utils**: Provide pure utility functions without side effects

### 2. **Modularity**
- Each component has a single responsibility
- Reusable UI components in `/UI` folder
- Feature-specific components grouped together
- Clear import/export structure

### 3. **Maintainability**
- Comprehensive documentation for every function
- Consistent naming conventions
- Clear error handling and validation
- Type safety through JSDoc comments

### 4. **Reusability**
- Generic UI components that can be used across features
- Utility functions that solve common problems
- Custom hooks that encapsulate reusable logic
- Constants that prevent magic numbers/strings

## 🔧 Component Architecture

### UI Components (`src/components/UI/`)
Reusable, generic components that can be used throughout the application:
- **Button**: Configurable button with multiple variants
- **Dropdown**: Flexible dropdown/select component
- **Input**: Multi-purpose input component (text, textarea, file)
- **InfoBox**: Message display component with different types

### Feature Components (`src/components/QRCodeGenerator/`)
Components specific to the QR code generation feature:
- **ModeSelector**: Handles mode selection (text/link/image)
- **ContentInput**: Handles content input based on selected mode
- **QRCodeOutput**: Displays generated QR code and related actions

### Custom Hooks (`src/hooks/`)
Encapsulate complex logic and state management:
- **useQRCodeGenerator**: All QR code generation logic
- **usePreventNavigation**: Browser navigation prevention

### Services (`src/services/`)
Handle external integrations and API calls:
- **imageUploadService**: Cloud storage upload functionality

### Utilities (`src/utils/`)
Pure functions for common operations:
- **validation**: Input validation functions
- **fileUtils**: File handling and formatting
- **urlUtils**: URL generation and manipulation
- **qrUtils**: QR code generation utilities

## 📊 Benefits of This Structure

### 1. **Better Code Organization**
- Clear separation of concerns
- Easy to locate specific functionality
- Logical grouping of related code

### 2. **Enhanced Reusability**
- UI components can be reused across features
- Utility functions prevent code duplication
- Custom hooks encapsulate reusable logic

### 3. **Improved Maintainability**
- Changes are localized to specific modules
- Clear dependencies between components
- Comprehensive documentation

### 4. **Better Testing**
- Individual components can be tested in isolation
- Utility functions are pure and easily testable
- Clear separation makes mocking easier

### 5. **Scalability**
- Easy to add new features without affecting existing code
- Clear patterns for extending functionality
- Modular structure supports team development

## 🚀 Usage Examples

### Importing UI Components
```javascript
import { Button, Input, InfoBox } from '../UI';
```

### Using Custom Hooks
```javascript
import { useQRCodeGenerator } from '../../hooks';

const MyComponent = () => {
  const { generateQRCode, qrCodeDataURL } = useQRCodeGenerator();
  // Component logic here
};
```

### Using Utility Functions
```javascript
import { isValidUrl, formatFileSize } from '../../utils';
```

### Using Services
```javascript
import { uploadToCloudStorage } from '../../services';
```

## 📝 Code Standards

### 1. **Documentation**
- Every function has JSDoc comments
- Clear parameter and return value descriptions
- Usage examples where appropriate

### 2. **Error Handling**
- Comprehensive error handling in all functions
- User-friendly error messages
- Graceful degradation where possible

### 3. **Validation**
- Input validation for all user inputs
- Type checking for function parameters
- Boundary condition handling

### 4. **Performance**
- Efficient file handling
- Optimized re-renders
- Lazy loading where appropriate

This structure ensures the codebase remains clean, maintainable, and scalable as the application grows.
