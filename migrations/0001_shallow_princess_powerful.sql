ALTER TABLE "Note" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Note" ALTER COLUMN "author_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Tag" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Tag" ALTER COLUMN "author_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_author_id_User_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;