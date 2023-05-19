import json

# Read the content from the text file with the correct encoding
with open('movie_list.txt', 'r', encoding='utf-8', errors='ignore') as file:
    data = file.readlines()

# Convert the data to a dictionary
movie_data = {}
for line in data:
    line = line.strip()
    if line:
        colon_index = line.index(':')
        movie = line[:colon_index].strip()
        genres = line[colon_index+1:].split(",")
        movie_data[movie] = [genre.strip() for genre in genres]

# Write the dictionary to a JSON file
with open('output.json', 'w', encoding='utf-8') as file:
    json.dump(movie_data, file, indent=4, ensure_ascii=False)
