import { useState } from 'react';
import { ArrowLeft, Calendar, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Web3: What You Need to Know',
            excerpt: 'Explore the latest trends and innovations shaping the future of decentralized internet and blockchain technology.',
            author: 'John Doe',
            date: '2024-01-15',
            category: 'Technology',
            image: 'https://thumbs.dreamstime.com/b/young-men-suits-gathered-business-meeting-discussing-together-strategies-developing-new-strategy-future-year-month-169022041.jpg',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            title: 'Getting Started with Cryptocurrency',
            excerpt: 'A beginner\'s guide to understanding cryptocurrency, wallets, and how to start your crypto journey securely.',
            author: 'Jane Smith',
            date: '2024-01-14',
            category: 'Guide',
            image: 'https://thumbs.dreamstime.com/b/international-team-successful-young-business-men-suits-meeting-discussing-implementation-plans-together-275150256.jpg',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqua ex ea commodo consequat.'
        },
        {
            id: 3,
            title: 'Smart Contracts Explained',
            excerpt: 'Understanding smart contracts and how they revolutionize trust and automation in the blockchain ecosystem.',
            author: 'Alex Johnson',
            date: '2024-01-13',
            category: 'Technology',
            image: 'https://thumbs.dreamstime.com/z/men-talking-meeting-happy-young-specialists-discussing-ideas-94124490.jpg',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            id: 4,
            title: 'NFTs: Beyond Digital Art',
            excerpt: 'Discover the real-world applications and future potential of NFTs beyond art and collectibles.',
            author: 'Sarah Williams',
            date: '2024-01-12',
            category: 'Guide',
            image: 'https://tse1.mm.bing.net/th/id/OIP.d8USwq5gX3Fauwp-PmMDHwHaFW?w=1600&h=1157&rs=1&pid=ImgDetMain&o=7&rm=3',
            content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 5,
            title: 'DeFi Opportunities and Risks',
            excerpt: 'Learn about decentralized finance opportunities, potential rewards, and essential risk management strategies.',
            author: 'Mike Chen',
            date: '2024-01-11',
            category: 'Technology',
            image: 'https://thumbs.dreamstime.com/z/brainstorming-time-business-team-office-young-men-gathered-together-discussing-sharing-ideas-planning-strategy-171320305.jpg',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        },
        {
            id: 6,
            title: 'Building Your First Blockchain App',
            excerpt: 'Step-by-step tutorial on building your first decentralized application using modern blockchain frameworks.',
            author: 'Emily Brown',
            date: '2024-01-10',
            category: 'Guide',
            image: 'https://thumbs.dreamstime.com/b/young-team-discussing-project-modern-office-business-corporate-meeting-successful-team-young-cheerful-people-brainstorming-121499329.jpg',
            content: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }
    ];

    const categories = ['all', 'Technology', 'Guide', 'News'];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-black text-white ">
            <Nav />
            <div className="pt-24 pb-20">
                {/* Header */}
                <div className="container mx-auto px-5 mb-16 flex flex-col items-start gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
                    <p className="text-xl text-gray-400">Stay updated with the latest news and insights in Web3 and blockchain</p>
                </div>

                {/* Search and Filter */}
                <div className="container mx-auto px-5 mb-12 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-4 mb-8 ">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="container mx-auto px-5 flex flex-col">
                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map(post => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="overflow-hidden h-48 bg-gray-800">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                            {post.category}
                                        </span>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Metadata */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-800 pt-4">
                                            <div className="flex items-center gap-1">
                                                <User size={14} />
                                                {post.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {new Date(post.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-400 text-lg">No articles found. Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
