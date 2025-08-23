-- CreateTable
CREATE TABLE "private"."users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "role" SMALLINT NOT NULL DEFAULT 1,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."users_admin" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "position" SMALLINT NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "users_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."users_staff" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "position" SMALLINT NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "users_staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."users_customer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "placeOfBirth" VARCHAR(100) NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "gender" SMALLINT NOT NULL DEFAULT 1,
    "phone" VARCHAR(15) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "users_customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."products" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."Carts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."CartsItems" (
    "id" SERIAL NOT NULL,
    "cartId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "CartsItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."Orders" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "status" SMALLINT NOT NULL DEFAULT 1,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."order_details" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."payments" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "method" SMALLINT NOT NULL,
    "status" SMALLINT NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "private"."PaymentConfirmations" (
    "id" SERIAL NOT NULL,
    "paymentId" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "bankAccountName" VARCHAR(100) NOT NULL,
    "bankAccountNumber" VARCHAR(50) NOT NULL,
    "bankName" VARCHAR(100) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "note" VARCHAR(255),
    "status" SMALLINT NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "PaymentConfirmations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "private"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_admin_userId_key" ON "private"."users_admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_staff_userId_key" ON "private"."users_staff"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_customer_userId_key" ON "private"."users_customer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "private"."categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "payments_orderId_key" ON "private"."payments"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "payments_code_key" ON "private"."payments"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentConfirmations_paymentId_key" ON "private"."PaymentConfirmations"("paymentId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentConfirmations_code_key" ON "private"."PaymentConfirmations"("code");

-- AddForeignKey
ALTER TABLE "private"."users_admin" ADD CONSTRAINT "users_admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."users_staff" ADD CONSTRAINT "users_staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."users_customer" ADD CONSTRAINT "users_customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "private"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."Carts" ADD CONSTRAINT "Carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."CartsItems" ADD CONSTRAINT "CartsItems_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "private"."Carts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."CartsItems" ADD CONSTRAINT "CartsItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "private"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "private"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."order_details" ADD CONSTRAINT "order_details_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "private"."Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."order_details" ADD CONSTRAINT "order_details_productId_fkey" FOREIGN KEY ("productId") REFERENCES "private"."products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."payments" ADD CONSTRAINT "payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "private"."Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private"."PaymentConfirmations" ADD CONSTRAINT "PaymentConfirmations_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "private"."payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
