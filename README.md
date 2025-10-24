# BitTree - Custom Link-in-Bio Solution 🌳

A modern, customizable link-in-bio tool built with Next.js 15, designed to help creators and professionals share multiple links through a single, beautiful landing page.

  ✨ Features

- **Custom Handle System - Claim your unique username
- **Dynamic Link Management - Add, edit, and organize multiple links
- **Profile Customization - Upload profile pictures and customize your page
- **Real-time Updates - Instant changes without page refresh
- **Fast Performance - Built with Next.js 15 for optimal speed

  🚀 Live Demo

Check out the live application: [bittree-seven.vercel.app](https://bittree-seven.vercel.app)

  🛠 Tech Stack

- **Framework: Next.js 15 with App Router
- **Styling: Tailwind CSS
- **Deployment: Vercel
- **State Management: React Hooks
- **Notifications: React Toastify

  📦 Installation

1. **Clone the repository
   ```bash
   git clone https://github.com/Ismailirshad/Bittree.git
   cd Bittree
   ```

2. **Install dependencies
   ```bash
   npm install
   ```

3. **Run the development server
   ```bash
   npm run dev
   ```

4. **Open your browser
   Navigate to [http://localhost:3000](http://localhost:3000)

   🏗 Project Structure

```
app/
├── page.tsx                 # Home page
├── generate/
│   └── page.tsx            # Link creation page
├── components/
│   └── GenerateContent.tsx  # Main component
└── api/
    └── add/
        └── route.ts        # API endpoint
```

   🎯 Usage

1. **Visit the Generate Page
   - Go to `/generate` to create your BitTree
   - Claim your custom handle
   - Add your profile picture URL
   - Insert multiple links with custom text

2. **Manage Your Links
   - Add unlimited links with the "Add Link" button
   - Each link has customizable text and URL
   - Real-time preview of your changes

3. **Finalize Your Page
   - Submit to create your personalized BitTree
   - Share your unique link with your audience

   🔧 API Endpoints

    POST `/api/add`
Creates a new BitTree profile

**Request Body:
```json
{
  "handle": "your-username",
  "pic": "profile-image-url",
  "links": [
    {
      "linktext": "Link Display Text",
      "link": "https://example.com"
    }
  ]
}
```

   🚀 Deployment

The project is configured for easy deployment on Vercel:

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Deploy with zero configuration

   🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

   📝 License

This project is open source and available under the [MIT License](LICENSE).

   👨‍💻 Author

  Ismail Irshad
- GitHub: [@Ismailirshad](https://github.com/Ismailirshad)
- Project: [BitTree](https://github.com/Ismailirshad/Bittree)

  🌟 Acknowledgments

- Built as my first Next.js project
- Inspired by modern link-in-bio tools
- Special thanks to the Next.js and Vercel teams

---

⭐ Star this repo if you find it helpful!

#NextJS #React #TypeScript #LinkInBio #OpenSource
