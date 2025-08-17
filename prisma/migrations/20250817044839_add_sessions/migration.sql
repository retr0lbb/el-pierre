-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('BASIC', 'ADMIN');

-- CreateTable
CREATE TABLE "public"."user_account" (
    "id" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'BASIC',
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "is_email_verified" BOOLEAN NOT NULL,

    CONSTRAINT "user_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Session" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mfaSecret" TEXT,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "has_expired" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
