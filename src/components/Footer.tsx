const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bernie Nguyen. Built by BernieWeb3
        </p>
      </div>
    </footer>
  );
};

export default Footer;
