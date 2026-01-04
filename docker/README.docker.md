docker compose up -d        # subir
docker compose down         # parar
docker compose logs -f n8n  # ver logs
docker compose restart      # reiniciar

docker compose cp ..\zensoftbr-n8n-nodes-zenerp-0.1.6.tgz n8n:/home/node/.n8n/nodes/
docker compose exec -it -u root n8n /bin/sh