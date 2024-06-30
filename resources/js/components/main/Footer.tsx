

export default function Header() {
    const year = new Date().getFullYear();

    return (
        <>
        <footer className="flex items-center justify-center h-16 bg-background border-t">
            <span className="text-muted-foreground">© {year} Handler. All rights reserved.</span>
        </footer>
        </>
    )
}
