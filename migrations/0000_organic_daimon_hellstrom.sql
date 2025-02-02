CREATE TABLE "Note" (
	"id" text PRIMARY KEY NOT NULL,
	"title" varchar(64),
	"content" text NOT NULL,
	"author_id" text,
	"last_updated_on" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "notes_to_tags" (
	"note_id" text NOT NULL,
	"tag_id" text NOT NULL,
	"author_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Tag" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(64),
	"author_id" text
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" text PRIMARY KEY NOT NULL,
	"email" varchar(64) NOT NULL,
	"password" varchar(64) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "notes_to_tags" ADD CONSTRAINT "notes_to_tags_note_id_Note_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."Note"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes_to_tags" ADD CONSTRAINT "notes_to_tags_tag_id_Tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."Tag"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes_to_tags" ADD CONSTRAINT "notes_to_tags_author_id_User_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;