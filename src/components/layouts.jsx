import NavigationMenuDemo from "@/components/NavigationMenuDemo";

export default function Layout({ children }) {
  return (
    <div>
      <NavigationMenuDemo />
      <main>{children}</main>
    </div>
  );
}
