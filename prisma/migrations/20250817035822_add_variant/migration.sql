-- CreateTable
CREATE TABLE "public"."product_variant" (
    "id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "qtd_stock" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "product_variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."product_variant" ADD CONSTRAINT "product_variant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
