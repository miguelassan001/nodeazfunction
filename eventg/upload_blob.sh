fichero=$(date +%s%3N)

echo "****** DATA = $fichero ******" > /tmp/$fichero
curl -i -X PUT -T /tmp/$fichero -H "x-ms-date: $(date -u)" -H "x-ms-blob-type: BlockBlob" "https://$STORAGEACCOUNT.blob.core.windows.net/$CONTAINER/$fichero$SASKEY"

echo $fichero
rm -f /tmp/$fichero
