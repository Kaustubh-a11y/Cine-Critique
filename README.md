# CineCritique | Premium Movie Reviews & Ratings 🎬✨

![CineCritique Homepage](cinecritique_home.png)

> **CineCritique** is a modern, high-performance Movie Review & Rating web application built with React 18, Vite, and custom Glassmorphic CSS. It provides live movie discovery, embedded YouTube trailers, cast details, interactive 10-star verified user reviews with spoiler protection, and personal watchlist management — **100% Free with zero API key required!**

---

## 🌟 Key Features

- 🍿 **100% Free Open API Engine**: Powered by TVMaze Open API + 4K Blockbuster dataset (*Oppenheimer*, *Dune: Part Two*, *Interstellar*, *Spider-Man*, *The Dark Knight*, *Inception*, etc.) requiring NO API keys or registrations.
- ⭐ **10-Star Community Rating System**: Interactive star picker with half-star precision, custom user avatars, headline, and detailed review text.
- 🙈 **Spoiler Protection**: Checkbox to flag review spoilers with instant blur styling and one-click unblur toggle for readers.
- 🔍 **Real-Time Live Search**: Debounced search bar providing instant title suggestions as you type.
- 🏷️ **Category & Genre Filters**: Switch seamlessly between **Trending**, **Popular**, **Top Rated**, and **Upcoming** blockbusters, or filter by genres (Action, Sci-Fi, Animation, Drama, Comedy, etc.).
- 🎥 **Trailer & Cast Showcase**: Embedded YouTube trailer player, runtime, release date, taglines, and scrollable cast avatar list.
- 🔖 **Personal Watchlist & Favorites**: One-click bookmarking to save films to your personal watchlist tab.
- 💾 **Local Storage Persistence**: All submitted reviews, ratings, helpful votes, and watchlist bookmarks persist safely across browser refreshes.
- 💎 **Modern Dark Glassmorphism UI**: Designed with Netflix-inspired crimson accents (`#e50914`), Google Fonts (`Outfit` & `Inter`), dynamic hover micro-animations, and full mobile responsiveness.

---

## 📸 Application Screenshots

### 1. Main Explore Page & Featured Blockbuster
![CineCritique Homepage Banner and Movie Grid](cinecritique_home.png)

### 2. Interactive Movie Detail Modal & Reviews
![CineCritique Movie Detail Modal](cinecritique_modal.png)

---

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 (SPA with Hooks & Context API)
- **Build Tool**: Vite v6
- **Styling**: Vanilla CSS (Custom Design System with CSS Variables & Glassmorphism)
- **Icons**: Lucide React Icons
- **Data Source**: TVMaze Open REST API + Curated 4K Blockbuster Engine
- **Typography**: Google Fonts (`Outfit` & `Inter`)

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Running Locally

1. **Clone or Navigate to the directory**:
   ```bash
   cd "Hack o week/Week 1"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npx vite --port 3000
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
Week 1/
├── cinecritique_home.png        # Homepage Screenshot
├── cinecritique_modal.png       # Detail Modal Screenshot
├── index.html                   # HTML entry point with fonts & favicon
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration
└── src/
    ├── main.jsx                 # Application mount point
    ├── App.jsx                  # Main App shell layout
    ├── index.css                # Master Glassmorphism design system
    ├── context/
    │   └── AppContext.jsx       # State provider for reviews & watchlist
    ├── services/
    │   └── tmdbApi.js           # API client & free blockbuster dataset
    └── components/
        ├── Navbar.jsx           # Top header with search & tabs
        ├── ApiKeyModal.jsx      # API status modal
        ├── HeroBanner.jsx       # Featured movie hero showcase
        ├── MovieCard.jsx        # Poster card with hover micro-animations
        ├── MovieGrid.jsx        # Category & genre filters with sorting
        ├── MovieModal.jsx       # Detail modal with trailer & cast carousel
        ├── ReviewForm.jsx       # 10-star rating picker & spoiler toggle
        ├── CommunityReviews.jsx # Feed of all submitted user reviews
        └── Watchlist.jsx        # Bookmarked movies page
```

---

## 📄 License
Created for Hack o Week - Week 1. Open Source & Free to use.
