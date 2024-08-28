import Container from "@/components/global/Container";
import Sidebar from "@/components/docs/Sidebar";
import ContentContainer from "@/components/docs/ContentContainer";

export default function Docs() {
  return (
    <Container className="flex w-full relative px-0 h-auto">
      <Sidebar/>
      <ContentContainer/>
    </Container>
  );
}
