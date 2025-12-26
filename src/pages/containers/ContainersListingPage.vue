<template>
  <div class="page">
    <div class="grid-container">
      <ListingComponent 
        v-for="container in containers" 
        :key="container.Id"
        :name="container.Names[0]?.replace('/', '')" 
        :state="container.State"
        @click="router.push(`/containers/${container.Id}`)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ListingComponent from '../../components/ListingComponent.vue';
const router = useRouter()

// this is a json from real docker api (/v1.51/containers/json)
//docker api 
const containers = [
  {
    Id: "546613bfd1b2213a36eefe4f8821e8d6e9a94e99172307ac9f84f6250ebdc116",
    Names: ["/lost-and-found-prod"],
    Image:
      "registry.gitlab.com/personal6534933/lost-and-found-e-day-year-2/lost-and-found-frontend:latest",
    ImageID:
      "sha256:35b7b460e29d67baf742e1b71861797c35ea623856b648aabccde864255a6331",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest:
        "sha256:1af4967cdca61e6a0f2895de6685883931421caf05c3b72940be0b5ae7d20ac9",
      size: 2188,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "/docker-entrypoint.sh nginx -g 'daemon off;'",
    Created: 1760165368,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 80,
        PublicPort: 80,
        Type: "tcp",
      },
      {
        IP: "::",
        PrivatePort: 80,
        PublicPort: 80,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.config-hash":
        "6ef1664bdd27870cd7cc33c53203af8ad78382cdf213fe26e13345747f542bb8",
      "com.docker.compose.container-number": "1",
      "com.docker.compose.depends_on": "",
      "com.docker.compose.image":
        "sha256:35b7b460e29d67baf742e1b71861797c35ea623856b648aabccde864255a6331",
      "com.docker.compose.oneoff": "False",
      "com.docker.compose.project": "lost-and-found-frontend-v2",
      "com.docker.compose.project.config_files":
        "/home/kanchnak/code/rupp/lost-and-found/lost-and-found-frontend-v2/docker-compose-prod.yml",
      "com.docker.compose.project.working_dir":
        "/home/kanchnak/code/rupp/lost-and-found/lost-and-found-frontend-v2",
      "com.docker.compose.service": "lost-and-found-prod",
      "com.docker.compose.version": "2.39.2",
      "desktop.docker.io/ports.scheme": "v2",
      "desktop.docker.io/ports/80/tcp": ":80",
      "desktop.docker.io/wsl-distro": "Debian",
      maintainer: "NGINX Docker Maintainers <docker-maint@nginx.com>",
    },
    State: "running",
    Status: "Up 3 seconds",
    HostConfig: {
      NetworkMode: "lost-and-found-frontend-v2_default",
    },
    NetworkSettings: {
      Networks: {
        "lost-and-found-frontend-v2_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "ce:fe:47:57:61:31",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID:
            "851cbcc57c302dcfa7a596e5b43ba11cfa319dd5055d3306e5f635b8d70aa056",
          EndpointID:
            "2ef9fc17b6e57d3c89903869b7c0e67b4abaef8a7c94c20df26e9c5b07d5d09d",
          Gateway: "172.20.0.1",
          IPAddress: "172.20.0.2",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [],
  },
  {
    Id: "874aa77951e476fc36e7b5ce3af6e06b0ac0fd4521c00423033d52bb3c79e216",
    Names: ["/dichi-system-postgres-1"],
    Image: "postgres:latest",
    ImageID:
      "sha256:29e0bb09c8e7e7fc265ea9f4367de9622e55bae6b0b97e7cce740c2d63c2ebc0",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest:
        "sha256:a064b150a9a994b16df56f4a989c32031128b399eeafd47f572141ee98d0cfe3",
      size: 3626,
      annotations: {
        "com.docker.official-images.bashbrew.arch": "amd64",
        "org.opencontainers.image.base.digest":
          "sha256:f2306da7a8fb6440535937baed0ce0018736742d6dc5beec9d6a31355b259726",
        "org.opencontainers.image.base.name": "debian:trixie-slim",
        "org.opencontainers.image.created": "2025-08-14T18:17:59Z",
        "org.opencontainers.image.revision":
          "e34fc9d23c4eab656e9037701d71962c9b46a2e7",
        "org.opencontainers.image.source":
          "https://github.com/docker-library/postgres.git#e34fc9d23c4eab656e9037701d71962c9b46a2e7:17/trixie",
        "org.opencontainers.image.url": "https://hub.docker.com/_/postgres",
        "org.opencontainers.image.version": "17.6",
      },
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "docker-entrypoint.sh postgres",
    Created: 1759999906,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 5432,
        PublicPort: 5432,
        Type: "tcp",
      },
      {
        IP: "::",
        PrivatePort: 5432,
        PublicPort: 5432,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.config-hash":
        "f2ded35f71f38686fd7bc8abba1fded427c776857b21782b637c2d63ce921ef6",
      "com.docker.compose.container-number": "1",
      "com.docker.compose.depends_on": "",
      "com.docker.compose.image":
        "sha256:29e0bb09c8e7e7fc265ea9f4367de9622e55bae6b0b97e7cce740c2d63c2ebc0",
      "com.docker.compose.oneoff": "False",
      "com.docker.compose.project": "dichi-system",
      "com.docker.compose.project.config_files":
        "/home/kanchnak/code/dichi/dichi-system/docker-compose.yml",
      "com.docker.compose.project.environment_file":
        "/home/kanchnak/code/dichi/dichi-system/envs/.env.local",
      "com.docker.compose.project.working_dir":
        "/home/kanchnak/code/dichi/dichi-system",
      "com.docker.compose.replace": "postgres-1",
      "com.docker.compose.service": "postgres",
      "com.docker.compose.version": "2.39.2",
      "desktop.docker.io/binds/0/Source":
        "/home/kanchnak/code/dichi/dichi-system/data/dichi",
      "desktop.docker.io/binds/0/SourceKind": "wsl2DistroFile",
      "desktop.docker.io/binds/0/Target": "/var/lib/postgresql/data",
      "desktop.docker.io/ports.scheme": "v2",
      "desktop.docker.io/ports/5432/tcp": ":5432",
      "desktop.docker.io/wsl-distro": "Debian",
    },
    State: "running",
    Status: "Up About a minute",
    HostConfig: {
      NetworkMode: "dichi-system_local",
    },
    NetworkSettings: {
      Networks: {
        "dichi-system_local": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "0e:35:e4:54:0c:06",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID:
            "3b2ee1b67256610b7a21e2c50bf851ec9ae722562aaf913aa863d50b04d0e13e",
          EndpointID:
            "2e2a42197015fa5001e972aeb3f8f88a1bdcbd3111b735494db5b6d75b8c3554",
          Gateway: "172.18.0.1",
          IPAddress: "172.18.0.2",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "bind",
        Source:
          "/run/desktop/mnt/host/wsl/docker-desktop-bind-mounts/Debian/5b728b92bc450b79d8dd86c983f09822b701780d585800583f91a3cdc363d342",
        Destination: "/var/lib/postgresql/data",
        Mode: "rw",
        RW: true,
        Propagation: "rprivate",
      },
    ],
  },
  {
    Id: "a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
    Names: ["/redis-cache"],
    Image: "redis:7-alpine",
    ImageID: "sha256:abc123def456789012345678901234567890abcdef1234567890abcdef123456",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:redis123456789abcdef",
      size: 1024,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "docker-entrypoint.sh redis-server",
    Created: 1760000000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 6379,
        PublicPort: 6379,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "app-stack",
      "com.docker.compose.service": "redis",
    },
    State: "running",
    Status: "Up 2 hours",
    HostConfig: {
      NetworkMode: "app-stack_default",
    },
    NetworkSettings: {
      Networks: {
        "app-stack_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:11:00:03",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "net123456",
          EndpointID: "endpoint123",
          Gateway: "172.17.0.1",
          IPAddress: "172.17.0.3",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [],
  },
  {
    Id: "b2c3d4e5f678901234567890123456789012abcdef1234567890abcdef1234567",
    Names: ["/nginx-proxy"],
    Image: "nginx:latest",
    ImageID: "sha256:nginx123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:nginx456789abcdef",
      size: 2048,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "/docker-entrypoint.sh nginx -g 'daemon off;'",
    Created: 1760050000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 80,
        PublicPort: 8080,
        Type: "tcp",
      },
      {
        IP: "0.0.0.0",
        PrivatePort: 443,
        PublicPort: 443,
        Type: "tcp",
      },
    ],
    Labels: {
      maintainer: "NGINX Docker Maintainers <docker-maint@nginx.com>",
      "com.docker.compose.project": "web-services",
    },
    State: "exited",
    Status: "Exited (0) 30 minutes ago",
    HostConfig: {
      NetworkMode: "bridge",
    },
    NetworkSettings: {
      Networks: {
        bridge: {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "bridge123",
          EndpointID: "",
          Gateway: "",
          IPAddress: "",
          IPPrefixLen: 0,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [],
  },
  {
    Id: "c3d4e5f67890123456789012345678901234abcdef1234567890abcdef12345678",
    Names: ["/mongodb-primary"],
    Image: "mongo:6.0",
    ImageID: "sha256:mongo123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:mongo456789abcdef",
      size: 3072,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "docker-entrypoint.sh mongod",
    Created: 1759900000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 27017,
        PublicPort: 27017,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "database-cluster",
      "com.docker.compose.service": "mongodb",
    },
    State: "running",
    Status: "Up 5 days",
    HostConfig: {
      NetworkMode: "database-cluster_default",
    },
    NetworkSettings: {
      Networks: {
        "database-cluster_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:12:00:05",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "dbnet123",
          EndpointID: "dbendpoint123",
          Gateway: "172.18.0.1",
          IPAddress: "172.18.0.5",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "volume",
        Name: "mongodb_data",
        Source: "/var/lib/docker/volumes/mongodb_data/_data",
        Destination: "/data/db",
        Mode: "rw",
        RW: true,
        Propagation: "",
      },
    ],
  },
  {
    Id: "d4e5f6789012345678901234567890123456abcdef1234567890abcdef123456789",
    Names: ["/api-backend"],
    Image: "node:20-alpine",
    ImageID: "sha256:node123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:node456789abcdef",
      size: 1536,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "npm run start",
    Created: 1760100000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 3000,
        PublicPort: 3000,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "fullstack-app",
      "com.docker.compose.service": "api",
    },
    State: "running",
    Status: "Up 1 hour",
    HostConfig: {
      NetworkMode: "fullstack-app_default",
    },
    NetworkSettings: {
      Networks: {
        "fullstack-app_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:13:00:02",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "appnet123",
          EndpointID: "appendpoint123",
          Gateway: "172.19.0.1",
          IPAddress: "172.19.0.2",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "bind",
        Source: "/home/kanchnak/code/projects/api",
        Destination: "/app",
        Mode: "rw",
        RW: true,
        Propagation: "rprivate",
      },
    ],
  },
  {
    Id: "e5f678901234567890123456789012345678abcdef1234567890abcdef1234567890",
    Names: ["/rabbitmq-broker"],
    Image: "rabbitmq:3-management",
    ImageID: "sha256:rabbitmq123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:rabbitmq456789abcdef",
      size: 2560,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "docker-entrypoint.sh rabbitmq-server",
    Created: 1759850000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 5672,
        PublicPort: 5672,
        Type: "tcp",
      },
      {
        IP: "0.0.0.0",
        PrivatePort: 15672,
        PublicPort: 15672,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "message-queue",
      "com.docker.compose.service": "rabbitmq",
    },
    State: "paused",
    Status: "Up 3 days (Paused)",
    HostConfig: {
      NetworkMode: "message-queue_default",
    },
    NetworkSettings: {
      Networks: {
        "message-queue_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:14:00:03",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "mqnet123",
          EndpointID: "mqendpoint123",
          Gateway: "172.20.0.1",
          IPAddress: "172.20.0.3",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [],
  },
  {
    Id: "f67890123456789012345678901234567890abcdef1234567890abcdef12345678901",
    Names: ["/elasticsearch-node"],
    Image: "elasticsearch:8.11.0",
    ImageID: "sha256:elastic123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:elastic456789abcdef",
      size: 4096,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "/bin/tini -- /usr/local/bin/docker-entrypoint.sh eswrapper",
    Created: 1759800000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 9200,
        PublicPort: 9200,
        Type: "tcp",
      },
      {
        IP: "0.0.0.0",
        PrivatePort: 9300,
        PublicPort: 9300,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "elk-stack",
      "com.docker.compose.service": "elasticsearch",
      "org.opencontainers.image.vendor": "Elastic",
    },
    State: "running",
    Status: "Up 7 days",
    HostConfig: {
      NetworkMode: "elk-stack_default",
    },
    NetworkSettings: {
      Networks: {
        "elk-stack_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:15:00:02",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "elknet123",
          EndpointID: "elkendpoint123",
          Gateway: "172.21.0.1",
          IPAddress: "172.21.0.2",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "volume",
        Name: "elasticsearch_data",
        Source: "/var/lib/docker/volumes/elasticsearch_data/_data",
        Destination: "/usr/share/elasticsearch/data",
        Mode: "rw",
        RW: true,
        Propagation: "",
      },
    ],
  },
  {
    Id: "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01",
    Names: ["/grafana-dashboard"],
    Image: "grafana/grafana:latest",
    ImageID: "sha256:grafana123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:grafana456789abcdef",
      size: 1792,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "/run.sh",
    Created: 1760120000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 3000,
        PublicPort: 3001,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "monitoring",
      "com.docker.compose.service": "grafana",
    },
    State: "running",
    Status: "Up 12 hours",
    HostConfig: {
      NetworkMode: "monitoring_default",
    },
    NetworkSettings: {
      Networks: {
        "monitoring_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:16:00:04",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "monnet123",
          EndpointID: "monendpoint123",
          Gateway: "172.22.0.1",
          IPAddress: "172.22.0.4",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "volume",
        Name: "grafana_data",
        Source: "/var/lib/docker/volumes/grafana_data/_data",
        Destination: "/var/lib/grafana",
        Mode: "rw",
        RW: true,
        Propagation: "",
      },
    ],
  },
  {
    Id: "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12",
    Names: ["/prometheus-server"],
    Image: "prom/prometheus:latest",
    ImageID: "sha256:prometheus123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:prometheus456789abcdef",
      size: 1280,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "/bin/prometheus --config.file=/etc/prometheus/prometheus.yml",
    Created: 1760080000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 9090,
        PublicPort: 9090,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "monitoring",
      "com.docker.compose.service": "prometheus",
    },
    State: "running",
    Status: "Up 4 hours",
    HostConfig: {
      NetworkMode: "monitoring_default",
    },
    NetworkSettings: {
      Networks: {
        "monitoring_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "02:42:ac:16:00:05",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "monnet123",
          EndpointID: "monendpoint456",
          Gateway: "172.22.0.1",
          IPAddress: "172.22.0.5",
          IPPrefixLen: 16,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "bind",
        Source: "/home/kanchnak/code/monitoring/prometheus.yml",
        Destination: "/etc/prometheus/prometheus.yml",
        Mode: "ro",
        RW: false,
        Propagation: "rprivate",
      },
    ],
  },
  {
    Id: "23456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123",
    Names: ["/mysql-database"],
    Image: "mysql:8.0",
    ImageID: "sha256:mysql123456789abcdef1234567890123456789abcdef",
    ImageManifestDescriptor: {
      mediaType: "application/vnd.oci.image.manifest.v1+json",
      digest: "sha256:mysql456789abcdef",
      size: 3584,
      platform: {
        architecture: "amd64",
        os: "linux",
      },
    },
    Command: "docker-entrypoint.sh mysqld",
    Created: 1759750000,
    Ports: [
      {
        IP: "0.0.0.0",
        PrivatePort: 3306,
        PublicPort: 3306,
        Type: "tcp",
      },
    ],
    Labels: {
      "com.docker.compose.project": "legacy-app",
      "com.docker.compose.service": "mysql",
    },
    State: "exited",
    Status: "Exited (1) 2 hours ago",
    HostConfig: {
      NetworkMode: "legacy-app_default",
    },
    NetworkSettings: {
      Networks: {
        "legacy-app_default": {
          IPAMConfig: null,
          Links: null,
          Aliases: null,
          MacAddress: "",
          DriverOpts: null,
          GwPriority: 0,
          NetworkID: "legacynet123",
          EndpointID: "",
          Gateway: "",
          IPAddress: "",
          IPPrefixLen: 0,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          DNSNames: null,
        },
      },
    },
    Mounts: [
      {
        Type: "volume",
        Name: "mysql_data",
        Source: "/var/lib/docker/volumes/mysql_data/_data",
        Destination: "/var/lib/mysql",
        Mode: "rw",
        RW: true,
        Propagation: "",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>