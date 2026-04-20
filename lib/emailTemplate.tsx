import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Props = { nume: string };

const OLIVE_950 = "#0f0e09";
const OLIVE_900 = "#1a1812";
const OLIVE_800 = "#2a2820";
const CREAM_50 = "#f7f3ea";
const CREAM_70 = "rgba(247,243,234,0.78)";
const GOLD_500 = "#b89968";
const GOLD_400 = "#d4b988";

export function WelcomeEmail({ nume }: Props) {
  return (
    <Html lang="ro">
      <Head />
      <Preview>
        {`Bine ai venit, ${nume}! Ai aici cele 2 antrenamente gratuite.`}
      </Preview>
      <Body
        style={{
          backgroundColor: OLIVE_950,
          margin: 0,
          padding: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          color: CREAM_50,
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "40px 24px",
          }}
        >
          <Section
            style={{
              textAlign: "center" as const,
              paddingBottom: "16px",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: GOLD_400,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
              }}
            >
              Manuela Vlașin
            </Text>
          </Section>

          <Section
            style={{
              backgroundColor: OLIVE_900,
              borderRadius: "20px",
              padding: "32px 28px",
              border: `1px solid ${OLIVE_800}`,
            }}
          >
            <Heading
              as="h1"
              style={{
                margin: "0 0 14px",
                color: CREAM_50,
                fontSize: "26px",
                lineHeight: 1.2,
                fontWeight: 700,
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Mă bucur că ești aici, {nume} 👋
            </Heading>
            <Text
              style={{
                margin: "0 0 8px",
                color: CREAM_70,
                fontSize: "15px",
                lineHeight: 1.6,
              }}
            >
              Ai solicitat cele 2 antrenamente gratuite — abdomen și fesieri, 15
              minute fiecare, fără echipament. Le găsești mai jos.
            </Text>
            <Text
              style={{
                margin: 0,
                color: CREAM_70,
                fontSize: "15px",
                lineHeight: 1.6,
              }}
            >
              Îți recomand să le faci de 3 ori pe săptămână, în zile diferite.
              Calitatea mișcării contează mai mult decât viteza.
            </Text>
          </Section>

          <WorkoutBlock
            emoji="🔥"
            title="Antrenament ABDOMEN"
            duration="15 min · Lower abs + core stabil"
            description="Focus pe lower abs și un core cu adevărat stabil. Fără mișcări inutile sau complicate."
            href="https://example.com/antrenament-abdomen"
            cta="Deschide antrenamentul Abdomen"
          />

          <WorkoutBlock
            emoji="🍑"
            title="Antrenament FESIERI"
            duration="15 min · Activare + tonifiere"
            description="Activare corectă + tonifiere reală. Fără să îți suprasoliciți spatele."
            href="https://example.com/antrenament-fesieri"
            cta="Deschide antrenamentul Fesieri"
          />

          <Hr
            style={{
              borderColor: OLIVE_800,
              margin: "32px 0 24px",
            }}
          />

          <Text
            style={{
              margin: "0 0 6px",
              color: CREAM_70,
              fontSize: "14px",
              lineHeight: 1.65,
            }}
          >
            Dacă ai întrebări sau vrei să îmi povestești cum a mers primul
            antrenament — răspunde direct la acest email. Citesc fiecare mesaj.
          </Text>
          <Text
            style={{
              margin: "16px 0 0",
              color: CREAM_50,
              fontSize: "16px",
              fontStyle: "italic" as const,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            — Manuela
          </Text>

          <Text
            style={{
              margin: "32px 0 0",
              color: "rgba(247,243,234,0.45)",
              fontSize: "11px",
              lineHeight: 1.5,
              textAlign: "center" as const,
            }}
          >
            Primești acest email pentru că ai solicitat materialul gratuit pe
            site-ul meu. Dacă nu mai vrei să primești emailuri de la mine, dă
            reply cu „Dezabonare”.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function WorkoutBlock({
  emoji,
  title,
  duration,
  description,
  href,
  cta,
}: {
  emoji: string;
  title: string;
  duration: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Section
      style={{
        marginTop: "20px",
        backgroundColor: OLIVE_800,
        borderRadius: "20px",
        padding: "24px",
        border: `1px solid ${OLIVE_900}`,
      }}
    >
      <Text
        style={{
          margin: "0 0 4px",
          color: GOLD_400,
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase" as const,
        }}
      >
        {duration}
      </Text>
      <Heading
        as="h2"
        style={{
          margin: "0 0 10px",
          color: CREAM_50,
          fontSize: "22px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
        }}
      >
        {emoji} {title}
      </Heading>
      <Text
        style={{
          margin: "0 0 18px",
          color: CREAM_70,
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </Text>
      <a
        href={href}
        style={{
          display: "inline-block",
          backgroundColor: GOLD_500,
          color: OLIVE_950,
          padding: "12px 22px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "13px",
          letterSpacing: "0.14em",
          textTransform: "uppercase" as const,
        }}
      >
        {cta}
      </a>
    </Section>
  );
}

export default WelcomeEmail;
