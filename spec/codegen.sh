#!/usr/bin/env bash
# Define the list of models

# Get the list of models from typebox (the single source of truth)
# This command returns a JSON array, e.g.:
models_json=$(typebox list --json)
# Parse the JSON into a Bash array
models=($(echo "$models_json" | jq -r '.[]'))

# Create a directory for each model (using lowercase directory names)
for model in "${models[@]}"; do
  dir=$(echo "$model" | tr '[:upper:]' '[:lower:]')
  mkdir -p "$dir"
done

for model in "${models[@]}"; do
  if [[ "$model" == "JavaScript" || "$model" == "JsonSchema" ]]; then
    ext="js"
  else
    ext="ts"
  fi

  # Convert model name to lowercase for the directory name
  dir=$(echo "$model" | tr '[:upper:]' '[:lower:]')

  typebox codegen "$model" --source typescript/input.ts > "$dir/gen-from-ts.$ext"
done



# For each model, generate the corresponding codegen file.
# Note: We assume that JavaScript and JsonSchema should use a .js file extension, while the rest use .ts.
for model in "${models[@]}"; do
  # Decide on the output file extension
  if [[ "$model" == "JavaScript" || "$model" == "JsonSchema" ]]; then
    ext="js"
  else
    ext="ts"
  fi

  # Convert model name to lowercase for the directory name
  dir=$(echo "$model" | tr '[:upper:]' '[:lower:]')

  # Run the codegen command using the previously generated model file as input
  typebox codegen "$model" --module typebox/gen-from-ts.ts > "$dir/gen-from-model.$ext"
done
