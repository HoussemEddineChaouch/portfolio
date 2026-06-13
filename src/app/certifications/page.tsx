"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import { certifications } from "@/resources/content";
import { routes } from "@/resources/once-ui.config";
import { notFound } from "next/navigation";

export default function CertificationsPage() {
  if (!routes["/certifications"]) {
    notFound();
  }

  return (
    <Column maxWidth="l" gap="xl" paddingX="l" paddingY="xl">
      {/* Header */}
      <Column gap="m">
        <Tag label={certifications.label} variant="neutral" />
        <Heading variant="display-strong-s">{certifications.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {certifications.description}
        </Text>
      </Column>

      {/* Grid */}
      <Flex wrap gap="m">
        {certifications.items.map((cert, i) => (
          <SmartLink
            key={i}
            href={cert.link}
            target="_blank"
            unstyled
            style={{ flex: "1 1 320px", maxWidth: "480px" }}
          >
            <Column
              border="neutral-medium"
              radius="l"
              overflow="hidden"
              fillWidth
              background="surface"
              style={{ cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--brand-border-strong)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{ width: "100%", height: "140px", objectFit: "cover" }}
                />
              )}

              <Column gap="s" padding="l">
                {/* alignItems="center" */}
                <Flex gap="s">
                  <Tag label={cert.platform} variant="brand" size="s" />
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {cert.date}
                  </Text>
                  <Flex flex={1} />
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    ↗
                  </Text>
                </Flex>

                <Text variant="body-strong-m" onBackground="neutral-strong">
                  {cert.title}
                </Text>

                <Flex wrap gap="xs">
                  {cert.skills.map((skill) => (
                    <Tag key={skill} label={skill} variant="neutral" size="s" />
                  ))}
                </Flex>
              </Column>
            </Column>
          </SmartLink>
        ))}
      </Flex>
    </Column>
  );
}
