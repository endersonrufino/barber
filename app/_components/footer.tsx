import { Card, CardContent } from "./ui/card";

const Footer = () => {
    return (
        <footer>
            <Card className="px-5 py-6">
                <CardContent>
                    <p className="text-xs font-semibold text-gray-400">
                        © 2025 Copyright <span className="font-bold">Beeps</span>
                    </p>
                </CardContent>
            </Card>
        </footer>
    );
}

export default Footer;