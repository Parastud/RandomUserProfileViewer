# Random User Profile Viewer 👤

Hey there! Welcome to this cool React Native app that shows random user profiles. It's like a digital card deck of people, but way more fun! 

## What's This All About? 🤔

This app fetches random user data from the Random Data API and displays it in a beautiful, easy-to-use interface. You can:
- View detailed user profiles with avatars and personal information
- Navigate through 80 different random users with intuitive Previous/Next buttons
- See all the important info like name, username, email, ID, UID, and password
- Enjoy a smooth, modern UI with nice animations and gradient effects

## Features ✨

- 🎨 Beautiful gradient backgrounds that enhance the visual experience
- 👤 Profile pictures (avatars) with a subtle shine effect
- 📱 Responsive design that works on all screen sizes
- 🔄 Smooth navigation between users (Previous and Next buttons)
- 🎯 Clean, organized information cards for each data point
- ⚡ Fast loading with nice loading states
- ❌ Friendly error handling for network issues or API problems
- 🔢 User counter showing current position (e.g., "1 / 80")

## User Data Display 📋

For each user, the app displays:
- Profile avatar (user image)
- Full name (first and last name)
- Username
- Email address
- User ID
- UID
- Password (shown as dots for security)

## API Details 🔌

The app uses the Random Data API to fetch user information:
- Endpoint: `https://random-data-api.com/api/users/random_user`
- We use the `size` parameter to fetch 80 users at once: `?size=80`
- Example API calls:
  - `https://random-data-api.com/api/users/random_user?size=1` (fetches 1 user)
  - `https://random-data-api.com/api/users/random_user?size=80` (fetches 80 users)

## Tech Stack 🛠️

We're using some awesome tools to make this happen:
- React Native - For building the mobile app
- NativeWind - For styling (it's like Tailwind CSS but for React Native!)
- Expo Linear Gradient - For those sweet gradient effects
- Ionicons - For beautiful icons
- Random Data API - For getting random user data

## Getting Started 🚀

1. First, make sure you have Node.js installed on your computer
2. Clone this repository:
   ```bash
   git clone [your-repo-url]
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Run on your device or simulator:
   ```bash
   npm run ios     # For iOS
   npm run android # For Android
   ```

## Project Structure 📁

```
app/
  ├── index.jsx      # Main user profile screen
  └── ...           # Other app files
tailwind.config.js   # NativeWind configuration
```

## How It Works 🧩

1. When the app starts, it fetches data for 80 users from the Random Data API
2. It displays one user at a time with their complete profile information
3. You can navigate through users with the Previous and Next buttons
4. The app keeps track of which user you're viewing (e.g., "5 / 80")
5. Error handling is implemented to manage API failures gracefully
6. Loading states provide feedback while waiting for data

## Error Handling 🛡️

The app includes proper error management:
- Network connectivity issues are detected and displayed to the user
- API failures show a friendly error message
- Edge cases (like reaching the beginning or end of the user list) are handled by disabling navigation buttons

## Contributing 🤝

Feel free to contribute to this project! Whether it's:
- 🐛 Fixing bugs
- ✨ Adding new features
- 📝 Improving documentation
- 🎨 Enhancing the design

Just make sure to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - feel free to use it however you'd like!

## Credits 🙏

- Random Data API for providing the user data
- Expo team for the amazing development tools
- NativeWind team for the styling solution
- All contributors who help improve this project

## Need Help? 💬

If you run into any issues or have questions, feel free to:
- Open an issue
- Check the documentation
- Reach out to the maintainers

Happy coding! 🚀
