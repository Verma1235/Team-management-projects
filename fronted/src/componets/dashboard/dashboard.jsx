import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Store, 
  PieChart, 
  Activity, 
  BarChart2, 
  PlayCircle, 
  Package, 
  Grid, 
  Search, 
  Menu, 
  X, 
  TrendingUp, 
  TrendingDown, 
  CreditCard,
  ChevronRight,
  MoreHorizontal,
  Smartphone,
  CheckCircle,
  XCircle,
  User,
  ShoppingBag,
  DollarSign
} from 'lucide-react';

const Dashboard = ({Logout}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800 flex overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out
          flex flex-col
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20 xl:w-64'}
        `}
      >
        {/* Brand Header */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 mr-3">
            <span className="font-bold text-white">B</span>
          </div>
          <div className={`font-bold text-lg tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen || isMobile ? 'opacity-100 w-auto' : 'lg:opacity-0 lg:w-0'}`}>
            BRAND<span className="text-blue-400">PRO</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Summary" active fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<Store size={20} />} label="Marketplace" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<PieChart size={20} />} label="Data Analytics" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<Activity size={20} />} label="Activity" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<BarChart2 size={20} />} label="Statistics" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<PlayCircle size={20} />} label="Start" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<Package size={20} />} label="Product" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<Grid size={20} />} label="Category" fullWidth={isSidebarOpen || isMobile} />
          <NavItem icon={<Grid size={20} />} label="Logout" fullWidth={isSidebarOpen || isMobile}  onClick={()=>{Logout()}}/>

        </nav>

        {/* User Profile Snippet (Bottom Sidebar) */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-xs font-bold shrink-0">
              JD
            </div>
            <div className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen || isMobile ? 'opacity-100 w-auto' : 'lg:opacity-0 lg:w-0'}`}>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-slate-800 hidden sm:block">Business Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
               <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 border-2 border-white"></div>
               <span className="sr-only">Notifications</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20 lg:pb-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                title="CUSTOMERS" 
                value="54,235" 
                trend="+12%" 
                trendUp={true} 
                icon={<User className="text-purple-500" />}
                color="bg-purple-50"
              />
              <StatCard 
                title="INCOME" 
                value="$960,632" 
                trend="+25%" 
                trendUp={true} 
                icon={<DollarSign className="text-green-500" />}
                color="bg-green-50"
              />
              <StatCard 
                title="PRODUCTS SOLD" 
                value="5,490" 
                trend="-2%" 
                trendUp={false} 
                icon={<ShoppingBag className="text-blue-500" />}
                color="bg-blue-50"
              />
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              
              {/* Left Column (2/3 width on large screens) */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Balance & Analytics Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div>
                      <h2 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Your Balance</h2>
                      <div className="text-3xl font-bold text-slate-800 mt-1">$10,632.00</div>
                      <div className="flex items-center mt-2 text-sm">
                        <span className="text-green-500 font-medium flex items-center">
                          <TrendingUp size={16} className="mr-1" /> +5.2%
                        </span>
                        <span className="text-gray-400 ml-2">vs last month</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                        Withdraw
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-slate-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                        Send
                      </button>
                    </div>
                  </div>

                  {/* Placeholder Chart */}
                  <div className="h-64 w-full bg-gradient-to-b from-blue-50/50 to-transparent rounded-xl border border-blue-50 relative overflow-hidden group">
                    {/* Simulated Graph Line */}
                    <svg className="absolute bottom-0 w-full h-full text-blue-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500" viewBox="0 0 400 150" preserveAspectRatio="none">
                       <path fill="currentColor" d="M0,150 L0,120 Q50,60 100,100 T200,80 T300,120 T400,60 L400,150 Z" />
                    </svg>
                    <svg className="absolute bottom-0 w-full h-full text-blue-600 stroke-current fill-none stroke-2" viewBox="0 0 400 150" preserveAspectRatio="none">
                       <path d="M0,120 Q50,60 100,100 T200,80 T300,120 T400,60" />
                    </svg>
                    
                    {/* Tooltip Overlay (Visual only) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                       <div className="bg-white px-3 py-1 rounded-full shadow-lg border border-gray-100 text-xs font-bold text-slate-600 mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                          Analytics View
                       </div>
                    </div>
                  </div>
                </div>

                {/* Finance Flow / Transactions */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-slate-800">Finance Flow</h3>
                    <button className="text-blue-500 text-sm font-medium hover:text-blue-600">View All</button>
                  </div>
                  
                  <div className="space-y-4">
                    <TransactionItem 
                      title="Withdraw Earning" 
                      time="12:40 am" 
                      amount="$4,120" 
                      isPositive={true}
                      icon={<TrendingDown className="rotate-45" size={20} />} 
                    />
                    <TransactionItem 
                      title="Paying Website Tax" 
                      time="10:20 am" 
                      amount="-$230" 
                      isPositive={false}
                      icon={<CreditCard size={20} />} 
                    />
                    <TransactionItem 
                      title="Marketplace Sales" 
                      time="09:15 am" 
                      amount="$1,062.90" 
                      isPositive={true}
                      icon={<Store size={20} />} 
                    />
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Upgrade Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
                  
                  <h3 className="text-xl font-bold mb-2 relative z-10">Upgrade to PRO</h3>
                  <p className="text-blue-100 text-sm mb-6 relative z-10">Get 100% insurance for your goods and unlimited analytics.</p>
                  
                  <div className="flex items-end gap-1 mb-6 relative z-10">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-blue-200 text-sm mb-1">/ month</span>
                  </div>
                  
                  <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-sm relative z-10">
                    Upgrade Now
                  </button>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-slate-800">Recent Orders</h3>
                    <MoreHorizontal className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <OrderItem 
                      id="#1235465"
                      name="Billy Hawkins" 
                      product="DJI Mavic Pro 2"
                      price="$42.00"
                      date="Sep 16, 2021"
                      status="Delivered"
                      statusColor="text-green-500 bg-green-50"
                    />
                    <OrderItem 
                      id="#1235468"
                      name="Jane Cooper" 
                      product="iPad Pro 2017 Model"
                      price="$932.00"
                      date="Sep 15, 2021"
                      status="Canceled"
                      statusColor="text-red-500 bg-red-50"
                    />
                  </div>
                  <button className="w-full mt-4 py-2 text-sm text-gray-500 font-medium hover:text-slate-800 transition-colors border border-dashed border-gray-200 rounded-lg hover:border-gray-300">
                    See All Orders
                  </button>
                </div>

                {/* Top Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg text-slate-800 mb-4">Top Categories</h3>
                  <p className="text-gray-400 text-xs mb-6">Explore your top categories and keep shopping with cashback.</p>
                  
                  <div className="space-y-4">
                     <CategoryBar label="Footwear" count="18,941" percent="70%" color="bg-blue-500" />
                     <CategoryBar label="Accessories" count="26,061" percent="45%" color="bg-purple-500" />
                     <CategoryBar label="Electronics" count="12,402" percent="30%" color="bg-orange-500" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- Reusable Components --- */

const NavItem = ({ icon, label, active = false, fullWidth = false }) => (
  <a 
    href="#" 
    className={`
      flex items-center px-4 py-3 rounded-xl transition-all duration-200 group
      ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
      ${!fullWidth ? 'lg:justify-center xl:justify-start' : ''}
    `}
  >
    <span className={`${active ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
      {icon}
    </span>
    <span className={`ml-3 font-medium ${!fullWidth ? 'lg:hidden xl:block' : ''}`}>
      {label}
    </span>
    {active && fullWidth && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white lg:hidden xl:block" />}
  </a>
);

const StatCard = ({ title, value, trend, trendUp, icon, color }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        {icon}
      </div>
      <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {trendUp ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
        {trend}
      </div>
    </div>
    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-800">{value}</p>
  </div>
);

const TransactionItem = ({ title, time, amount, isPositive, icon }) => (
  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
    <span className={`font-bold ${isPositive ? 'text-slate-800' : 'text-red-500'}`}>
      {amount}
    </span>
  </div>
);

const OrderItem = ({ id, name, product, price, date, status, statusColor }) => (
  <div className="flex items-start gap-4 p-3 border border-gray-100 rounded-xl hover:border-blue-100 transition-colors">
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
      <Package size={20} className="text-gray-400" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start">
         <h4 className="font-bold text-sm text-slate-800 truncate">{name}</h4>
         <span className="text-xs font-bold text-slate-800">{price}</span>
      </div>
      <p className="text-xs text-gray-500 mb-1 truncate">{product}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-[10px] text-gray-400">{date}</span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>
    </div>
  </div>
);

const CategoryBar = ({ label, count, percent, color }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="text-gray-400 text-xs">{count} units</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${color}`} 
        style={{ width: percent }}
      ></div>
    </div>
  </div>
);

export default Dashboard;