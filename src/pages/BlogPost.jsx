import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, ThumbsUp } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const BlogPost = () => {
    const location = useLocation();
    const id = location.pathname.split('/blog/')[1];

    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Web3: What You Need to Know',
            excerpt: 'Explore the latest trends and innovations shaping the future of decentralized internet and blockchain technology.',
            author: 'John Doe',
            date: '2024-01-15',
            category: 'Technology',
            image: 'https://thumbs.dreamstime.com/b/young-men-suits-gathered-business-meeting-discussing-together-strategies-developing-new-strategy-future-year-month-169022041.jpg',
            content: `
        <h2>The Future of Web3: What You Need to Know</h2>
        
        <p>Web3 represents a fundamental shift in how we interact with the internet and digital assets. Unlike Web2, which is dominated by centralized platforms and corporations, Web3 is built on blockchain technology and decentralization principles.</p>

        <h3>What is Web3?</h3>
        <p>Web3, also known as the decentralized web, is the next generation of the internet. It's characterized by:
        <ul>
          <li><strong>Decentralization:</strong> No single entity controls the network.</li>
          <li><strong>Blockchain Integration:</strong> Uses distributed ledger technology for security and transparency.</li>
          <li><strong>User Ownership:</strong> Users have control over their data and digital assets.</li>
          <li><strong>Cryptographic Security:</strong> Advanced encryption ensures security and privacy.</li>
        </ul>
        </p>

        <h3>Key Technologies in Web3</h3>
        <p>Several technologies are driving the Web3 revolution:</p>
        <ul>
          <li><strong>Blockchain:</strong> The backbone of Web3, enabling secure and transparent transactions.</li>
          <li><strong>Smart Contracts:</strong> Self-executing contracts that run on blockchain networks.</li>
          <li><strong>Cryptocurrencies:</strong> Digital currencies powered by blockchain technology.</li>
          <li><strong>NFTs:</strong> Non-fungible tokens representing unique digital assets.</li>
          <li><strong>DAOs:</strong> Decentralized Autonomous Organizations governed by smart contracts.</li>
        </ul>

        <h3>Current Trends in Web3</h3>
        <p>The Web3 landscape is rapidly evolving with several exciting trends:</p>
        <ul>
          <li><strong>DeFi Growth:</strong> Decentralized Finance platforms are offering financial services without intermediaries.</li>
          <li><strong>Metaverse Development:</strong> Virtual worlds built on blockchain technology.</li>
          <li><strong>Web3 Gaming:</strong> Play-to-earn games powered by blockchain and NFTs.</li>
          <li><strong>Enterprise Adoption:</strong> Major corporations exploring blockchain solutions.</li>
          <li><strong>Regulatory Clarity:</strong> Governments establishing clearer regulations for crypto and blockchain.</li>
        </ul>

        <h3>Challenges Ahead</h3>
        <p>Despite the excitement, Web3 faces several challenges:</p>
        <ul>
          <li>Scalability issues on some blockchain networks</li>
          <li>Regulatory uncertainty in many countries</li>
          <li>User experience complexity</li>
          <li>Environmental concerns regarding proof-of-work systems</li>
          <li>Security vulnerabilities and hacking risks</li>
        </ul>

        <h3>The Future Outlook</h3>
        <p>Web3 is poised to transform how we interact with the digital world. As technology matures and regulatory frameworks develop, we can expect increased adoption across industries. The convergence of AI, IoT, and blockchain will create new possibilities for decentralized applications.</p>

        <p>Whether you're a developer, investor, or just curious about the future of the internet, understanding Web3 is essential. The transition from Web2 to Web3 will not happen overnight, but the trajectory is clear. We're witnessing the early stages of a digital revolution that will reshape the internet for decades to come.</p>

        <h3>Getting Started with Web3</h3>
        <p>If you're interested in exploring Web3, here are some first steps:</p>
        <ul>
          <li>Learn about blockchain technology and how it works</li>
          <li>Create a cryptocurrency wallet</li>
          <li>Explore decentralized applications (dApps)</li>
          <li>Join Web3 communities and forums</li>
          <li>Stay updated with the latest developments and trends</li>
        </ul>

        <p>The future of the internet is decentralized, and Web3 is leading the way. Are you ready to be part of this digital transformation?</p>
      `
        },
        {
            id: 2,
            title: 'Getting Started with Cryptocurrency',
            excerpt: 'A beginner\'s guide to understanding cryptocurrency, wallets, and how to start your crypto journey securely.',
            author: 'Jane Smith',
            date: '2024-01-14',
            category: 'Guide',
            image: 'https://thumbs.dreamstime.com/b/international-team-successful-young-business-men-suits-meeting-discussing-implementation-plans-together-275150256.jpg',
            content: `
        <h2>Getting Started with Cryptocurrency: A Beginner's Guide</h2>
        
        <p>Cryptocurrency can seem intimidating at first, but with the right guidance, anyone can get started. This comprehensive guide will walk you through everything you need to know as a beginner.</p>

        <h3>What is Cryptocurrency?</h3>
        <p>Cryptocurrency is a digital form of money that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies are decentralized and operate on blockchain networks.</p>

        <h3>Popular Cryptocurrencies</h3>
        <ul>
          <li><strong>Bitcoin (BTC):</strong> The first and most well-known cryptocurrency.</li>
          <li><strong>Ethereum (ETH):</strong> A blockchain platform that enables smart contracts.</li>
          <li><strong>Litecoin (LTC):</strong> A faster alternative to Bitcoin.</li>
          <li><strong>Ripple (XRP):</strong> Designed for fast international payments.</li>
          <li><strong>Cardano (ADA):</strong> A research-backed blockchain platform.</li>
        </ul>

        <h3>Understanding Wallets</h3>
        <p>A cryptocurrency wallet is where you store your digital assets. There are several types:</p>
        <ul>
          <li><strong>Hot Wallets:</strong> Online wallets connected to the internet (convenient but less secure).</li>
          <li><strong>Cold Wallets:</strong> Offline storage (more secure but less convenient).</li>
          <li><strong>Hardware Wallets:</strong> Physical devices for storing crypto (most secure).</li>
          <li><strong>Mobile Wallets:</strong> Smartphone apps for managing crypto on the go.</li>
          <li><strong>Web Wallets:</strong> Browser-based wallets for easy access.</li>
        </ul>

        <h3>Steps to Get Started</h3>
        <p><strong>Step 1: Choose an Exchange</strong><br/>
        Select a reputable cryptocurrency exchange where you can buy, sell, and trade cryptocurrencies. Popular exchanges include Coinbase, Kraken, Binance, and Gemini.</p>

        <p><strong>Step 2: Create an Account</strong><br/>
        Sign up on your chosen exchange and complete the identity verification process (KYC - Know Your Customer).</p>

        <p><strong>Step 3: Secure Your Account</strong><br/>
        Enable two-factor authentication (2FA) and use a strong password. Never share your private keys or seed phrases.</p>

        <p><strong>Step 4: Add Payment Method</strong><br/>
        Link your bank account or credit card to deposit funds. Start with a small amount as you learn.</p>

        <p><strong>Step 5: Make Your First Purchase</strong><br/>
        Buy your first cryptocurrency. Many beginners start with Bitcoin or Ethereum.</p>

        <p><strong>Step 6: Move to a Wallet</strong><br/>
        Transfer your crypto from the exchange to your personal wallet for better security.</p>

        <h3>Security Best Practices</h3>
        <ul>
          <li>Use strong, unique passwords</li>
          <li>Enable two-factor authentication</li>
          <li>Never share your private keys</li>
          <li>Use cold storage for large amounts</li>
          <li>Be cautious of phishing scams</li>
          <li>Keep your software and devices updated</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Investing more than you can afford to lose</li>
          <li>Trading on emotions</li>
          <li>Falling for scams and get-rich-quick schemes</li>
          <li>Not keeping track of your taxes</li>
          <li>Using unsecured wallets</li>
          <li>Ignoring security measures</li>
        </ul>

        <h3>The Future of Crypto</h3>
        <p>As cryptocurrency technology matures, adoption continues to grow. Major corporations and institutions are increasingly recognizing the value of blockchain and digital assets. Whether you're interested in investment, technology, or financial innovation, cryptocurrency offers exciting opportunities.</p>

        <p>Remember: The cryptocurrency market is volatile. Never invest more than you can afford to lose, and always do your own research before making investment decisions.</p>
      `
        },
        {
            id: 3,
            title: 'Smart Contracts Explained',
            excerpt: 'Understanding smart contracts and how they revolutionize trust and automation in the blockchain ecosystem.',
            author: 'Alex Johnson',
            date: '2024-01-13',
            category: 'Technology',
            image: 'https://thumbs.dreamstime.com/z/men-talking-meeting-happy-young-specialists-discussing-ideas-94124490.jpg',
            content: `
        <h2>Smart Contracts Explained: Automating Trust</h2>
        
        <p>Smart contracts are self-executing contracts with terms written directly into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries and revolutionizing how agreements are conducted.</p>

        <h3>What Are Smart Contracts?</h3>
        <p>Smart contracts are programs that run on blockchain networks. They contain:
        <ul>
          <li>Terms and conditions of an agreement</li>
          <li>Executable code that performs actions</li>
          <li>Automatic triggers based on conditions</li>
          <li>Immutable records of execution</li>
        </ul>
        </p>

        <h3>How Smart Contracts Work</h3>
        <p>Smart contracts operate through a process called "code as law":
        <ol>
          <li>Conditions are defined in code</li>
          <li>The contract is deployed on the blockchain</li>
          <li>When conditions are met, the contract automatically executes</li>
          <li>The transaction is recorded and immutable</li>
          <li>All parties can verify the execution</li>
        </ol>
        </p>

        <h3>Key Advantages</h3>
        <ul>
          <li><strong>Automation:</strong> Eliminates manual execution and human error</li>
          <li><strong>Transparency:</strong> All parties can see and verify the code</li>
          <li><strong>Security:</strong> Cryptographic security ensures terms are enforced</li>
          <li><strong>Efficiency:</strong> Reduces time and costs associated with intermediaries</li>
          <li><strong>Trust:</strong> No need to trust a third party</li>
          <li><strong>Immutability:</strong> Executed contracts cannot be altered</li>
        </ul>

        <h3>Real-World Applications</h3>
        <ul>
          <li><strong>Insurance:</strong> Automated claims settlement</li>
          <li><strong>Real Estate:</strong> Automated property transfers</li>
          <li><strong>Supply Chain:</strong> Tracking and verification of goods</li>
          <li><strong>Voting:</strong> Transparent and tamper-proof elections</li>
          <li><strong>Lending:</strong> Collateralized loans without banks</li>
          <li><strong>Entertainment:</strong> Royalty distribution to artists</li>
        </ul>

        <h3>Platforms for Smart Contracts</h3>
        <ul>
          <li><strong>Ethereum:</strong> The leading platform for smart contracts</li>
          <li><strong>Solidity:</strong> The most popular smart contract language</li>
          <li><strong>Other Platforms:</strong> Cardano, Polkadot, Solana, and more</li>
        </ul>

        <h3>Challenges and Limitations</h3>
        <ul>
          <li><strong>Code Vulnerabilities:</strong> Bugs in code can lead to financial loss</li>
          <li><strong>Complexity:</strong> Difficult for non-programmers to understand</li>
          <li><strong>Scalability:</strong> Network congestion can affect execution speed</li>
          <li><strong>Legal Recognition:</strong> Not yet fully recognized in all legal systems</li>
          <li><strong>Irreversibility:</strong> Mistakes cannot be easily undone</li>
        </ul>

        <h3>The Future of Smart Contracts</h3>
        <p>As blockchain technology matures and programming frameworks improve, smart contracts will become more accessible and prevalent. They have the potential to revolutionize numerous industries and fundamentally change how agreements are made and enforced.</p>

        <p>Smart contracts represent a paradigm shift from "trust" to "verification." Instead of relying on intermediaries, parties can now rely on transparent, immutable code to enforce agreements.</p>
      `
        },
        {
            id: 4,
            title: 'NFTs: Beyond Digital Art',
            excerpt: 'Discover the real-world applications and future potential of NFTs beyond art and collectibles.',
            author: 'Sarah Williams',
            date: '2024-01-12',
            category: 'Guide',
            image: 'https://tse1.mm.bing.net/th/id/OIP.d8USwq5gX3Fauwp-PmMDHwHaFW?w=1600&h=1157&rs=1&pid=ImgDetMain&o=7&rm=3',
            content: `
        <h2>NFTs: Beyond Digital Art - Unlocking Real-World Value</h2>
        
        <p>While NFTs gained prominence through digital art and collectibles, their potential extends far beyond. Let's explore how NFTs are revolutionizing various industries.</p>

        <h3>What Are NFTs?</h3>
        <p>Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of something on the blockchain. Each NFT has distinct properties and cannot be replicated or interchanged like cryptocurrencies.</p>

        <h3>Beyond Art: Real-World Applications</h3>
        <ul>
          <li><strong>Real Estate:</strong> Digital property ownership and virtual land trading</li>
          <li><strong>Gaming:</strong> In-game items with real-world value</li>
          <li><strong>Credentials:</strong> Diplomas, certificates, and professional licenses</li>
          <li><strong>Music:</strong> Direct artist-to-fan sales, eliminating middlemen</li>
          <li><strong>Fashion:</strong> Digital clothing and wearables</li>
          <li><strong>Sports:</strong> Player cards, tickets, and memorabilia</li>
          <li><strong>Supply Chain:</strong> Product authenticity verification</li>
          <li><strong>Healthcare:</strong> Medical records and prescriptions</li>
        </ul>

        <h3>The Metaverse Connection</h3>
        <p>NFTs are fundamental to metaverse experiences, allowing users to:
        <ul>
          <li>Own virtual property and land</li>
          <li>Display digital art and collectibles</li>
          <li>Wear unique digital fashion</li>
          <li>Own virtual businesses and experiences</li>
          <li>Trade across different virtual worlds</li>
        </ul>
        </p>

        <h3>Economic Impact</h3>
        <p>The NFT market has already demonstrated significant economic potential:
        <ul>
          <li>Artists earning millions from digital works</li>
          <li>Gaming platforms generating billions in revenue</li>
          <li>New job opportunities in design and curation</li>
          <li>New investment opportunities</li>
          <li>Direct revenue for creators without intermediaries</li>
        </ul>
        </p>

        <h3>Challenges Facing NFTs</h3>
        <ul>
          <li>Environmental concerns (especially with proof-of-work blockchains)</li>
          <li>Market volatility and speculation</li>
          <li>Copyright and intellectual property issues</li>
          <li>Regulatory uncertainty</li>
          <li>User experience complexity</li>
        </ul>

        <h3>The Future of NFTs</h3>
        <p>As technology improves and use cases expand, NFTs will likely become mainstream. We can expect:
        <ul>
          <li>Integration with traditional industries</li>
          <li>Improved standards and interoperability</li>
          <li>Better user experiences</li>
          <li>Environmental solutions for blockchain networks</li>
          <li>Legal frameworks governing NFT ownership and rights</li>
        </ul>
        </p>

        <h3>Getting Started with NFTs</h3>
        <p>If you're interested in NFTs:
        <ul>
          <li>Learn about blockchain technology</li>
          <li>Set up a crypto wallet</li>
          <li>Explore NFT marketplaces like OpenSea, Rarible, or Foundation</li>
          <li>Understand the risks before investing</li>
          <li>Join NFT communities and forums</li>
        </ul>
        </p>

        <p>NFTs represent more than just digital art—they're digital property rights on the blockchain. As the technology matures, expect NFTs to play a crucial role in the digital economy.</p>
      `
        },
        {
            id: 5,
            title: 'DeFi Opportunities and Risks',
            excerpt: 'Learn about decentralized finance opportunities, potential rewards, and essential risk management strategies.',
            author: 'Mike Chen',
            date: '2024-01-11',
            category: 'Technology',
            image: 'https://thumbs.dreamstime.com/z/brainstorming-time-business-team-office-young-men-gathered-together-discussing-sharing-ideas-planning-strategy-171320305.jpg',
            content: `
        <h2>DeFi Opportunities and Risks: Navigating Decentralized Finance</h2>
        
        <p>Decentralized Finance (DeFi) is revolutionizing the financial industry by removing intermediaries and enabling peer-to-peer transactions. However, with great opportunities come significant risks.</p>

        <h3>What is DeFi?</h3>
        <p>DeFi refers to financial services built on blockchain networks that operate without traditional intermediaries like banks. Users have direct control over their funds and can participate in financial activities 24/7.</p>

        <h3>Popular DeFi Applications</h3>
        <ul>
          <li><strong>DEX (Decentralized Exchanges):</strong> Trade cryptocurrencies directly</li>
          <li><strong>Lending Platforms:</strong> Earn interest on crypto holdings</li>
          <li><strong>Staking:</strong> Earn rewards by supporting blockchain networks</li>
          <li><strong>Yield Farming:</strong> Provide liquidity and earn rewards</li>
          <li><strong>Derivatives:</strong> Trade futures and options on crypto</li>
          <li><strong>Insurance:</strong> Protect against smart contract failures</li>
        </ul>

        <h3>Key Opportunities</h3>
        <ul>
          <li><strong>Higher Returns:</strong> DeFi often offers higher interest rates than traditional banking</li>
          <li><strong>Accessibility:</strong> No minimum balance or credit requirements</li>
          <li><strong>Transparency:</strong> All transactions visible on the blockchain</li>
          <li><strong>24/7 Trading:</strong> Trade whenever you want</li>
          <li><strong>Financial Inclusion:</strong> Available to anyone with internet access</li>
          <li><strong>Innovation:</strong> New financial products and services</li>
        </ul>

        <h3>Understanding DeFi Risks</h3>
        <ul>
          <li><strong>Smart Contract Risk:</strong> Bugs can lead to fund loss</li>
          <li><strong>Impermanent Loss:</strong> Liquidity providers face value fluctuation</li>
          <li><strong>Price Volatility:</strong> Extreme market swings</li>
          <li><strong>Liquidation Risk:</strong> Collateral seized if market moves against you</li>
          <li><strong>Scams:</strong> Fraudulent projects and rug pulls</li>
          <li><strong>Regulatory Risk:</strong> Changing regulations could affect DeFi</li>
        </ul>

        <h3>Risk Management Strategies</h3>
        <ul>
          <li>Only invest what you can afford to lose</li>
          <li>Diversify across multiple platforms and assets</li>
          <li>Understand impermanent loss before providing liquidity</li>
          <li>Research smart contracts and security audits</li>
          <li>Use reputable platforms with good track records</li>
          <li>Keep funds in personal wallets, not exchange accounts</li>
          <li>Monitor your positions regularly</li>
          <li>Understand the tokenomics of projects</li>
        </ul>

        <h3>Getting Started in DeFi</h3>
        <p>For beginners interested in DeFi:
        <ol>
          <li>Educate yourself on blockchain and smart contracts</li>
          <li>Start with stablecoins to minimize volatility</li>
          <li>Begin with small amounts on established platforms</li>
          <li>Understand gas fees and transaction costs</li>
          <li>Use hardware wallets for security</li>
          <li>Join DeFi communities for guidance</li>
          <li>Stay informed on market developments</li>
        </ol>
        </p>

        <h3>The Future of DeFi</h3>
        <p>DeFi is still in its early stages. As technology improves and regulations develop, expect:
        <ul>
          <li>Institutional adoption of DeFi protocols</li>
          <li>Integration with traditional finance</li>
          <li>Better user interfaces for non-technical users</li>
          <li>Clearer regulatory frameworks</li>
          <li>More stable and secure smart contracts</li>
          <li>Expansion into new financial services</li>
        </ul>
        </p>

        <p>DeFi offers unprecedented financial opportunities, but success requires careful research, risk management, and continuous learning. The rewards can be substantial, but so can the losses. Approach DeFi with caution and only use funds you can afford to lose.</p>
      `
        },
        {
            id: 6,
            title: 'Building Your First Blockchain App',
            excerpt: 'Step-by-step tutorial on building your first decentralized application using modern blockchain frameworks.',
            author: 'Emily Brown',
            date: '2024-01-10',
            category: 'Guide',
            image: 'https://thumbs.dreamstime.com/b/young-team-discussing-project-modern-office-business-corporate-meeting-successful-team-young-cheerful-people-brainstorming-121499329.jpg',
            content: `
        <h2>Building Your First Blockchain App: A Step-by-Step Guide</h2>
        
        <p>Building a decentralized application (dApp) is more accessible than ever. This guide will walk you through creating your first blockchain application.</p>

        <h3>Prerequisites</h3>
        <p>Before starting, ensure you have:
        <ul>
          <li>Basic JavaScript knowledge</li>
          <li>Understanding of smart contracts</li>
          <li>Node.js installed on your computer</li>
          <li>A text editor or IDE (VS Code recommended)</li>
          <li>TestETH or test tokens for development</li>
        </ul>
        </p>

        <h3>Essential Tools and Frameworks</h3>
        <ul>
          <li><strong>Truffle:</strong> Development framework for Ethereum</li>
          <li><strong>Hardhat:</strong> Popular Ethereum development environment</li>
          <li><strong>Remix IDE:</strong> Browser-based smart contract editor</li>
          <li><strong>Web3.js:</strong> JavaScript library for blockchain interaction</li>
          <li><strong>Ethers.js:</strong> Alternative to Web3.js</li>
          <li><strong>React:</strong> Popular frontend framework for dApps</li>
          <li><strong>MetaMask:</strong> Browser wallet for user authentication</li>
        </ul>

        <h3>Step 1: Set Up Your Development Environment</h3>
        <p>Create a new project directory and initialize Node.js. Install Hardhat, which provides a powerful development environment for Ethereum dApps.</p>

        <h3>Step 2: Write Your Smart Contract</h3>
        <p>Create a simple Solidity smart contract. Here are some beginner-friendly ideas:
        <ul>
          <li>A simple token contract</li>
          <li>A voting contract</li>
          <li>A todo list stored on blockchain</li>
          <li>A simple marketplace</li>
          <li>A counter that stores values on-chain</li>
        </ul>
        </p>

        <h3>Step 3: Compile and Test</h3>
        <p>Compile your smart contract and write tests to ensure it works correctly. Good testing is crucial for security.</p>

        <h3>Step 4: Deploy to Testnet</h3>
        <p>Deploy your contract to a test network like Goerli, Sepolia, or Mumbai Polygon testnet. This allows you to test without spending real money.</p>

        <h3>Step 5: Build the Frontend</h3>
        <p>Create a web interface using React or your preferred framework. Connect it to MetaMask or another web3 provider.</p>

        <h3>Step 6: Enable Web3 Interaction</h3>
        <p>Use Web3.js or Ethers.js to:
        <ul>
          <li>Connect to user's wallet</li>
          <li>Send transactions</li>
          <li>Read contract data</li>
          <li>Handle events</li>
          <li>Display transaction status</li>
        </ul>
        </p>

        <h3>Step 7: Test Your dApp</h3>
        <p>Thoroughly test all functionality:
        <ul>
          <li>Transaction creation and confirmation</li>
          <li>Error handling</li>
          <li>Gas estimation</li>
          <li>Network switching</li>
          <li>Mobile responsiveness</li>
        </ul>
        </p>

        <h3>Step 8: Deploy to Mainnet</h3>
        <p>Once satisfied with testing, deploy to the main network. Be careful with real money and double-check everything before deployment.</p>

        <h3>Common Challenges and Solutions</h3>
        <ul>
          <li><strong>Gas Fees:</strong> Optimize your contract code</li>
          <li><strong>Network Congestion:</strong> Use layer 2 solutions or alternative networks</li>
          <li><strong>Security Issues:</strong> Audit your code thoroughly</li>
          <li><strong>User Adoption:</strong> Create intuitive interfaces</li>
          <li><strong>Regulatory Compliance:</strong> Research applicable regulations</li>
        </ul>

        <h3>Resources for Learning</h3>
        <ul>
          <li>CryptoZombies (interactive Solidity tutorial)</li>
          <li>Hardhat documentation</li>
          <li>OpenZeppelin contracts and libraries</li>
          <li>Ethereum development communities</li>
          <li>YouTube tutorials and courses</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Start simple and build complexity gradually</li>
          <li>Prioritize security over features</li>
          <li>Write thorough tests</li>
          <li>Get code audits before mainnet deployment</li>
          <li>Document your code well</li>
          <li>Stay updated with framework changes</li>
          <li>Engage with the developer community</li>
        </ul>

        <p>Building blockchain applications is an exciting journey. With dedication and continuous learning, you can create innovative dApps that serve real-world needs. Start small, test thoroughly, and scale your skills as you progress.</p>
      `
        }
    ];

    const post = blogPosts.find(p => p.id === parseInt(id));

    // Debug: log the id and post
    console.log('URL ID:', id, 'Type:', typeof id);
    console.log('Parsed ID:', parseInt(id));
    console.log('Post found:', post);

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white">
                <Nav />
                <div className="container mx-auto px-5 pt-32 pb-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link to="/blog" className="text-blue-400 hover:text-blue-300">
                        Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Nav />
            <div className="pt-24 pb-20">
                {/* Back Button */}
                <div className="container mx-auto px-5 mb-8">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                </div>

                {/* Hero Image */}
                <div className="w-full h-96 mb-12 overflow-hidden rounded-xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="container mx-auto px-5 max-w-3xl">
                    {/* Header Info */}
                    <div className="mb-8">
                        <span className="inline-block bg-blue-600/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>

                        {/* Metadata */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-6 border-b border-gray-800">
                            <div className="flex items-center gap-2 text-gray-400">
                                <User size={18} />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Calendar size={18} />
                                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert max-w-none mb-12">
                        <div
                            className="text-gray-300 leading-relaxed space-y-6"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Share Section */}
                    <div className="border-t border-gray-800 pt-8 mt-12">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Share this article</h3>
                                <p className="text-gray-400">Help others discover this content</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
                                    <Share2 size={18} />
                                    Share
                                </button>
                                <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg transition-colors">
                                    <ThumbsUp size={18} />
                                    Like
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Articles Preview */}
                    <div className="border-t border-gray-800 pt-12 mt-12">
                        <h3 className="text-2xl font-bold mb-8">More Articles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(related => (
                                <Link
                                    key={related.id}
                                    to={`/blog/${related.id}`}
                                    className="group bg-gray-900/50 border border-gray-800 rounded-lg p-5 hover:border-blue-500 transition-all"
                                >
                                    <p className="text-blue-400 text-sm font-semibold mb-2">{related.category}</p>
                                    <h4 className="font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{related.title}</h4>
                                    <p className="text-gray-400 text-sm line-clamp-2">{related.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogPost;
