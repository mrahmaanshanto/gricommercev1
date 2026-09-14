import {
  Activity, AlertCircle, ArrowRight, ArrowRightLeft, Banknote, Bell, Boxes,
  BookOpen, Building2, ChartColumn, ChartNoAxesCombined, ChartPie, Check,
  CircleCheck, ClipboardList, Clock, CreditCard, Database, ExternalLink, Eye,
  FileChartColumn, FileText, Filter, Globe, Handshake, History, Image as ImageIcon,
  Languages, Layers, LayoutTemplate, LifeBuoy, Lock, Mail, MapPin, MessageCircle,
  MessagesSquare, MousePointerClick, Network, Newspaper, Package, PackageCheck,
  Palette, Percent, Phone, Play, Quote, RotateCcw,
  Receipt, ScanBarcode, Search, Send, Settings, ShieldCheck, ShoppingCart, Smartphone,
  Sparkles, Star, Store, Table, Tag, TrendingUp, Truck, Users, Wallet, Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Activity, AlertCircle, ArrowRight, ArrowRightLeft, Banknote, Bell, Boxes,
  BookOpen, Building2, ChartColumn, ChartNoAxesCombined, ChartPie, Check,
  CircleCheck, ClipboardList, Clock, CreditCard, Database, ExternalLink, Eye,
  FileBarChart: FileChartColumn, FileChartColumn, FileText, Filter, Globe,
  Handshake, History, Image: ImageIcon, Languages, Layers, LayoutTemplate,
  LifeBuoy, Lock, Mail, MapPin, MessageCircle, MessagesSquare, MousePointerClick,
  Network, Newspaper, Package, PackageCheck, Palette, Percent, Phone, Play, Quote,
  Receipt, RotateCcw, ScanBarcode, Search, Send, Settings,
  ShieldCheck, ShoppingCart, Smartphone, Sparkles, Star, Store, Table, Tag,
  TrendingUp, Truck, Users, Wallet, Warehouse, Zap,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name?: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = (name && ICONS[name]) || Sparkles;
  return <Cmp aria-hidden className={className} strokeWidth={strokeWidth} />;
}
