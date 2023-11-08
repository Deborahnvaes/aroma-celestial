
import { Footer } from "./componentes/footer/footer";
import { Header } from "./componentes/header/header";
import { OpcoesCafe } from "./componentes/main-opcoes/opcoes";
import { SectionInfo } from "./componentes/section-info/section-info";

export default function Home() {
  return (
    <>     
    <Header />
    <SectionInfo />
    <OpcoesCafe/>
    <Footer />
    </>
  );
}
